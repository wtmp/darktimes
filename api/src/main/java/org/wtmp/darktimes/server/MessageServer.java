package org.wtmp.darktimes.server;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.*;
import io.netty.channel.epoll.Epoll;
import io.netty.channel.epoll.EpollEventLoopGroup;
import io.netty.channel.epoll.EpollServerSocketChannel;
import io.netty.channel.group.ChannelGroup;
import io.netty.channel.group.DefaultChannelGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.codec.http.HttpContentCompressor;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpServerCodec;
import io.netty.handler.codec.http.websocketx.TextWebSocketFrame;
import io.netty.handler.codec.http.websocketx.WebSocketFrame;
import io.netty.handler.codec.http.websocketx.WebSocketServerProtocolHandler;
import io.netty.handler.ssl.SslContext;
import io.netty.util.concurrent.GlobalEventExecutor;
import jakarta.annotation.PostConstruct;
import jakarta.annotation.Resource;
import lombok.extern.java.Log;
import org.springframework.stereotype.Component;

@Log
@Component
public class MessageServer implements Runnable {
    private int port = 1982;

    public static final String ENDPOINT = "/websocket";

    protected ChannelGroup recipients = new DefaultChannelGroup(GlobalEventExecutor.INSTANCE);

    @Resource
    SslContext sslContext;

    @PostConstruct
    public void run() {
        EventLoopGroup boss = null;
        EventLoopGroup worker = null;

        if(Epoll.isAvailable()) {
            boss = new EpollEventLoopGroup();
            worker = new EpollEventLoopGroup();
        } else {
            boss = new NioEventLoopGroup();
            worker = new NioEventLoopGroup();
        }

        ServerBootstrap serverBootstrap = new ServerBootstrap()
                .group(boss, worker)
                .channel(Epoll.isAvailable()
                        ? EpollServerSocketChannel.class
                        : NioServerSocketChannel.class)
                .childHandler(new ChannelInitializer<SocketChannel>() {
                    @Override
                    protected void initChannel(SocketChannel ch) throws Exception {
                        ChannelPipeline pipeline = ch.pipeline();

                        pipeline.addLast(sslContext.newHandler(ch.alloc()));

                        pipeline.addLast(new HttpServerCodec());
                        pipeline.addLast(new HttpObjectAggregator(65536));
                        pipeline.addLast(new HttpContentCompressor());
                        pipeline.addLast(new WebSocketServerProtocolHandler(ENDPOINT));

                        pipeline.addLast(new SimpleChannelInboundHandler<WebSocketFrame>() {
                            @Override
                            public void channelActive(ChannelHandlerContext ctx) throws Exception {
                                super.channelActive(ctx);
                                recipients.add(ctx.channel());
                            }

                            @Override
                            public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
                                super.exceptionCaught(ctx, cause);
                                cause.printStackTrace();
                                ctx.close();
                            }

                            @Override
                            protected void channelRead0(ChannelHandlerContext ctx, WebSocketFrame msg) throws Exception {
                                TextWebSocketFrame frame = (TextWebSocketFrame)msg;

                                System.out.println(frame.text());

                                ctx.writeAndFlush(new TextWebSocketFrame(frame.text()));
                            }
                        });
                    }
                })
                .option(ChannelOption.SO_BACKLOG, 128)
                .childOption(ChannelOption.SO_KEEPALIVE, true);

        try {
            ChannelFuture f = serverBootstrap.bind(port).sync();
            f.channel().closeFuture().sync();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        } finally {
            boss.shutdownGracefully();
            worker.shutdownGracefully();
        }
    }
}
