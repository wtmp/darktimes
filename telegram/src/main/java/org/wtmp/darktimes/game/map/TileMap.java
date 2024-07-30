package org.wtmp.darktimes.game.map;

import lombok.Getter;

@Getter
public class TileMap {
    protected TileMapDefinition tileMapDefinition;
    protected int x;
    protected int y;

    public TileMap(TileMapDefinition tileMapDefinition, int x, int y) {
        this.tileMapDefinition = tileMapDefinition;
        this.x = x;
        this.y = y;
    }
}
