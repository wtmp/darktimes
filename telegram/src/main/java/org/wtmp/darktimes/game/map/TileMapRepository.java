package org.wtmp.darktimes.game.map;

public interface TileMapRepository {
    void addTile(TileMap tileMap);
    TileMap getTile(int x, int y);
}
