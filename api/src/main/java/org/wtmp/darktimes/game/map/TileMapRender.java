package org.wtmp.darktimes.game.map;

import jakarta.inject.Inject;
import org.springframework.stereotype.Component;

@Component
public class TileMapRender {
    @Inject
    TileMapRepository tileMapRepository;

    public String renderViewport(int x, int y, int width, int height) {
        StringBuilder result = new StringBuilder();

        int centerOfViewX = x + (width / 2);
        int centerOfViewY = y + (width / 2);

        for (int j = y; j < y + height; j++) {
            for (int i = x; i < x + width; i++) {
                if (i == centerOfViewX &&
                        j == centerOfViewY) {
                    result.append("\uD83E\uDDD4");
                } else {
                    TileMap tile = tileMapRepository.getTile(i, j);

                    result.append(tile.getTileMapDefinition()
                            .getIcon()
                            .getSymbol()
                    );
                }
            }
            result.append("</br>");
        }

        return result.toString();
    }
}
