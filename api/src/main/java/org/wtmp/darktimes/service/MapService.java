package org.wtmp.darktimes.service;

import org.springframework.stereotype.Component;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.buttons.InlineKeyboardButton;
import org.wtmp.darktimes.utils.InlineMarkupBuilderUtils;

import java.util.List;
import java.util.Random;

@Component
public class MapService {
    public List<List<InlineKeyboardButton>> defaultInterfaceMarkup() {
        return new InlineMarkupBuilderUtils()
                .add("\uD83C\uDF0D map", "move")
                .add("⬆", "move")
                .add("\uD83D\uDDE1 attack", "move")
                .end()
                .add("⬅", "move")
                .add("\uD83D\uDD2D look", "look")
                .add("➡", "move")
                .end()
                .add("\uD83C\uDF92 bag", "move")
                .add("⬇", "move")
                .add("\uD83D\uDD96 skills", "move")
                .end()
                .add("\uD83D\uDCAC say", "move")
                .end()
                .build();
    }

    public String draw() {
        String[] objs = new String[10];

        objs[0] = "\uD83C\uDF31";
        objs[1] = "\uD83C\uDF32";
        objs[2] = "\uD83C\uDF33";
        objs[3] = "\uD83C\uDF3E";

        Random rnd = new Random();

        StringBuilder s = new StringBuilder();

        for (int y = 0; y < 11; y++) {
            for (int x = 0; x < 11; x++) {
                if(x == 5 && y == 5) {
                    s.append("\uD83E\uDDD4");
                } else {
                    int i = rnd.nextInt(0, 10);
                    if (i == 5) {
                        int n = rnd.nextInt(0, 3);
                        s.append(objs[n]);
                    } else {
                        s.append("⬛");
                    }
                }

            }
            s.append("\n");
        }
        s.append("\n<code>The weather is hot.</code>");
        s.append("\n<code>No wind.</code>");
        return s.toString();
    }
}
