package org.wtmp.darktimes.server;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.buffer.ByteBuf;
import io.netty.channel.*;
import io.netty.channel.epoll.Epoll;
import io.netty.channel.epoll.EpollEventLoopGroup;
import io.netty.channel.epoll.EpollServerSocketChannel;
import io.netty.channel.internal.ChannelUtils;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.codec.ByteToMessageDecoder;
import io.netty.handler.codec.DelimiterBasedFrameDecoder;
import io.netty.handler.codec.LineBasedFrameDecoder;
import io.netty.handler.codec.http.HttpContentCompressor;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpServerCodec;
import io.netty.handler.codec.http.websocketx.*;
import io.netty.handler.codec.string.StringDecoder;
import io.netty.handler.codec.string.StringEncoder;
import io.netty.handler.ssl.SslContext;
import io.netty.util.CharsetUtil;
import jakarta.annotation.PostConstruct;
import jakarta.annotation.Resource;
import lombok.extern.java.Log;
import org.springframework.data.util.CastUtils;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.util.List;

@Log
@Component
public class GameServer {
    private int port = 1982;

    @Resource
    SslContext sslContext;

    @PostConstruct
    public void start() {
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
                .channel(Epoll.isAvailable() ? EpollServerSocketChannel.class : NioServerSocketChannel.class)
                .childHandler(new ChannelInitializer<SocketChannel>() {
                    @Override
                    protected void initChannel(SocketChannel ch) throws Exception {
                        ChannelPipeline pipeline = ch.pipeline();

                        pipeline.addLast(sslContext.newHandler(ch.alloc()));

                        pipeline.addLast(new HttpServerCodec());
                        pipeline.addLast(new HttpObjectAggregator(65536));
                        pipeline.addLast(new HttpContentCompressor());
                        pipeline.addLast(new WebSocketServerProtocolHandler("/websocket"));

                        pipeline.addLast(new SimpleChannelInboundHandler<WebSocketFrame>() {
                            @Override
                            protected void channelRead0(ChannelHandlerContext ctx, WebSocketFrame msg) throws Exception {
                                TextWebSocketFrame frame = (TextWebSocketFrame)msg;

                                System.out.println(frame.text());

                                ctx.writeAndFlush(new TextWebSocketFrame("huy"));
                            }
                        });

                        //pipeline.addLast(new WebSocketFrameHandler());

//                        pipeline.addLast(new LineBasedFrameDecoder(128));
//
//                        pipeline.addLast(new StringDecoder(CharsetUtil.UTF_8));
//
//                        pipeline.addLast(new StringEncoder(CharsetUtil.UTF_8));
//
//                        pipeline.addLast(new SimpleChannelInboundHandler<String>() {
//                            @Override
//                            protected void channelRead0(ChannelHandlerContext ctx, String msg) {
//                                ctx.writeAndFlush("huy");
//                            }
//                        });


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
