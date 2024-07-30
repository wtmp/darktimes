package org.wtmp.darktimes.view;

import jakarta.inject.Inject;
import lombok.SneakyThrows;
import org.springframework.stereotype.Component;
import org.telegram.telegrambots.meta.api.methods.ParseMode;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.methods.updatingmessages.EditMessageText;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.InlineKeyboardMarkup;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.buttons.InlineKeyboardButton;
import org.wtmp.darktimes.telegram.TelegramBot;

import java.util.*;

@Component
public class MapCommandView {
    @Inject
    TelegramBot sender;

    @SneakyThrows
    public void printMapCommand(long chatId, int messageId, String map, List<List<Map>> nav) {
        List<List<InlineKeyboardButton>> list = new ArrayList<>();

        for (List<Map> rows : nav) {
            List<InlineKeyboardButton> row = new ArrayList<>();

            for (Map button : rows) {
                String key = (String) button.keySet().stream().map(e -> {
                    return e.toString();
                }).findFirst().orElse(null);

                String value = (String) button.get(key);

                row.add(
                        InlineKeyboardButton
                                .builder()
                                .text(key)
                                .callbackData(value)
                                .build());
            }
            list.add(row);
        }

        sender.execute(
                SendMessage
                        .builder()
                        .text(map)
                        .chatId(chatId)
                        .parseMode(ParseMode.HTML)
                        .replyMarkup(
                                InlineKeyboardMarkup
                                        .builder()
                                        .keyboard(list)
                                        .build()
                        )
                        .build()
        );
    }

    @SneakyThrows
    public void editMapCommand(long chatId, int messageId, String map, List<List<Map>> nav) {
//        sender.execute(
//                SendMessage.builder()
//                        .chatId(chatId)
//                        .text("Keyboard removed.")
//                        .replyMarkup(InlineKeyboardMarkup
//                                .builder()
//                                .keyboardRow(List.of(
//                                        InlineKeyboardButton
//                                                .builder()
//                                                .text("huy")
//                                                .webApp(WebAppInfo
//                                                        .builder()
//                                                        .url("https://google.com")
//                                                        .build())
//                                                .build()
//                                ))
//                                .build()
//                        ).build()
//        );

        List<List<InlineKeyboardButton>> list = new ArrayList<>();

        for (List<Map> rows : nav) {
            List<InlineKeyboardButton> row = new ArrayList<>();

            for (Map button : rows) {
                String key = (String) button.keySet().stream().map(e -> {
                    return e.toString();
                }).findFirst().orElse(null);

                String value = (String) button.get(key);

                row.add(
                        InlineKeyboardButton
                                .builder()
                                .text(key)
                                .callbackData(value)
                                .build());
            }
            list.add(row);
        }

        sender.execute(
                EditMessageText
                        .builder()
                        .text(map)
                        .chatId(chatId)
                        .messageId(messageId)
                        .parseMode(ParseMode.HTML)
                        .replyMarkup(
                                InlineKeyboardMarkup
                                        .builder()
                                        .keyboard(list)
                                        .build()
                        )
                        .build()
        );
    }
}
