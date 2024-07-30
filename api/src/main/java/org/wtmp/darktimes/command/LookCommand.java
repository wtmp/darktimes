package org.wtmp.darktimes.command;

import jakarta.inject.Inject;
import org.springframework.stereotype.Component;
import org.telegram.telegrambots.meta.api.methods.ParseMode;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.methods.updatingmessages.EditMessageText;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.InlineKeyboardMarkup;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.buttons.InlineKeyboardButton;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;
import org.wtmp.darktimes.game.map.TileMapRender;
import org.wtmp.darktimes.game.map.TileMapRepository;
import org.wtmp.darktimes.game.user.User;
import org.wtmp.darktimes.observer.MessagePublisher;
import org.wtmp.darktimes.repository.IconRepository;
import org.wtmp.darktimes.telegram.RequestLimiter;
import org.wtmp.darktimes.telegram.TelegramBot;
import org.wtmp.darktimes.telegram.TelegramChatResponse;
import org.wtmp.darktimes.utils.InlineMarkupBuilderUtils;

import java.io.Writer;
import java.util.List;

@Component
public class LookCommand extends Command {
    public void accept(MessagePublisher listener) {
        listener.add(this);
    }

//    @Inject
//    TileMapRepository tileMapRepository;
//
//    @Inject
//    IconRepository iconRepository;
//
//    @Inject
//    TileMapRender tileMapRender;
//
//    @Inject
//    TelegramBot sender;
//
//    RequestLimiter requestLimiter = new RequestLimiter();
//
//    private int x = 30;
//    private int y = 30;

    @Override
    public void onCommand(User user, int messageId, String command) {
//        StringBuilder result = new StringBuilder();
//
//        TelegramChatResponse response = new TelegramChatResponse(user.getChatId(), messageId);
//        Writer writer = response.getWriter();
//
//        List<List<InlineKeyboardButton>> markup = new InlineMarkupBuilderUtils()
//                .add("\uD83C\uDF0D map", "move")
//                .add("⬆", "up")
//                .add("\uD83D\uDDE1 attack", "move")
//                .end()
//                .add("⬅", "left")
//                .add("\uD83D\uDD2D look", "look")
//                .add("➡", "right")
//                .end()
//                .add("\uD83C\uDF92 bag", "move")
//                .add("⬇", "down")
//                .add("\uD83D\uDD96 skills", "move")
//                .end()
//                .add("\uD83D\uDCAC say", "move")
//                .end()
//                .build();
//
//        if ("right".equals(command)) {
//            x += 1;
//        }
//
//        if ("left".equals(command)) {
//            if (x > 0) x -= 1;
//        }
//
//        if ("up".equals(command)) {
//            if (y > 0) y -= 1;
//        }
//
//        if ("down".equals(command)) {
//            y += 1;
//        }
//
//        result.append(tileMapRender.renderViewport(x, y, 13, 13));
//
//        if ("/map".equals(command)) {
//            try {
//                sender.execute(
//                        SendMessage.builder()
//                                .chatId(user.getChatId())
//                                .parseMode(ParseMode.HTML)
//                                .replyMarkup(InlineKeyboardMarkup.builder()
//                                        .keyboard(markup)
//                                        .build())
//                                .text(result.toString())
//                                .build()
//                );
//            } catch (TelegramApiException e) {
//                //throw new RuntimeException(e);
//                e.printStackTrace();
//            }
//        }
//
//        System.out.println(messageId);
//
//        if (!result.isEmpty())
//            requestLimiter.addRequest(() -> {
//                try {
//                    sender.execute(
//                            EditMessageText.builder()
//                                    .chatId(user.getChatId())
//                                    .messageId(messageId)
//                                    .parseMode(ParseMode.HTML)
//                                    .replyMarkup(InlineKeyboardMarkup.builder()
//                                            .keyboard(markup)
//                                            .build())
//                                    .text(result.toString())
//                                    .build());
//                } catch (TelegramApiException e) {
//                    //throw new RuntimeException(e);
//                    e.printStackTrace();
//                }
//            });
    }
}
