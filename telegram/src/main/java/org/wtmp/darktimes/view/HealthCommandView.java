package org.wtmp.darktimes.view;

import jakarta.inject.Inject;
import lombok.SneakyThrows;
import org.springframework.stereotype.Component;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.wtmp.darktimes.telegram.TelegramBot;

import java.util.Random;

@Component
public class HealthCommandView {
    @Inject
    TelegramBot sender;

    @SneakyThrows
    public void printHealthCommand(long chatId, int currentHp, int maxHp) {
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
        String[] objs = new String[10];
        objs[0] = "\uD83C\uDF31";
        objs[1] = "\uD83C\uDF32";
        objs[2] = "\uD83C\uDF33";
        objs[3] = "\uD83C\uDF3E";

        Random rnd = new Random();

        String s = "";
        for (int y = 0; y < 10; y++) {
            for (int x = 0; x < 10; x++) {
                if(x == 5 && y == 5) {
                    s += "\uD83E\uDDD4";
                } else {
                    int i = rnd.nextInt(0, 9);
                    if (i == 5) {
                        int n = rnd.nextInt(0, 3);
                        s += objs[n];
                    } else {
                        s += "⚫";
                    }
                }

            }
            s += "\n";
        }
        sender.execute(
                SendMessage
                        .builder()
                        .text(s)
                        .chatId(chatId)
                        .build()
        );
    }
}
