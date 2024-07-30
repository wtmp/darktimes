package org.wtmp.darktimes.view;

import jakarta.annotation.PostConstruct;
import jakarta.inject.Inject;
import lombok.SneakyThrows;
import org.springframework.stereotype.Component;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.InlineKeyboardMarkup;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.buttons.InlineKeyboardButton;
import org.wtmp.darktimes.game.Creature;
import org.wtmp.darktimes.utils.InlineMarkupBuilderUtils;
import org.wtmp.darktimes.telegram.ChatResponse;
import org.wtmp.darktimes.telegram.TelegramBot;
import org.wtmp.darktimes.telegram.TelegramChatResponse;

import java.io.Writer;
import java.util.List;

/**
 * Displays a sector (500x500m) of global map
 */
@Component
public class MapViewportView {

    @Inject
    TelegramBot telegramBot;

    private int viewportWidth;
    private int viewportHeight;

    @PostConstruct
    void onPostConstruct() {
        viewportWidth = 10;
        viewportHeight = 10;
    }

    public MapViewportView(int viewportWidth, int viewportHeight) {
        this.viewportWidth = viewportWidth;
        this.viewportHeight = viewportHeight;
    }

    public MapViewportView() {
    }

    private static final int TILE_TYPE_UNDEFINED = 0;
    private static final int TILE_TYPE_SEA = 1;
    private static final int TILE_TYPE_GRASSLAND = 2;
    private static final int TILE_TYPE_FOREST = 3;
    private static final int TILE_TYPE_JUNGLE = 4;
    private static final int TILE_TYPE_DESERT = 5;
    private static final int TILE_TYPE_GREEN_MOUNTAIN = 6;
    private static final int TILE_TYPE_BARREN_MOUNTAIN = 7;
    private static final int TILE_TYPE_FROZEN = 8;
    private static final int TILE_TYPE_RIVER = 9;

    public String displayViewport(int x, int y) {
        StringBuilder builder = new StringBuilder();

//        for (int j = 0; j < viewportHeight - 1; j++) {
//            for (int i = 0; i < viewportWidth - 1; i++) {
//                builder.append(globalMap.findTileAt(x + i, y + j));
//            }
//            builder.append("\n");
//        }
        return builder.toString();
    }

    @SneakyThrows
    void displayViewport(Creature creature, ChatResponse response) {
        List<List<InlineKeyboardButton>> markup = new InlineMarkupBuilderUtils()
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

        Writer out = response.getWriter();

        int halfViewportWidth = viewportWidth / 2;
        int halfViewportHeight = viewportHeight / 2;

//        int offsetX = creature.getX() - halfViewportWidth;
//        int offsetY = creature.getY() - halfViewportHeight;

        for (int y = 0; y < viewportHeight; y++) {
            for (int x = 0; x < viewportWidth; x++) {
                //out.append(sector.findElementAt(offsetY + y, offsetX + x).type);

            }
            out.append("\n");
        }

        ((TelegramChatResponse) response).setReplyKeyboard(InlineKeyboardMarkup
                .builder()
                .keyboard(markup)
                .build());

       // response.execute(telegramBot);

        out.close();
    }
}
