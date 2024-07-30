package org.wtmp.darktimes.game.map;

public interface TileMapDefinitionRepository {
    void addDefinition(TileMapDefinition tileMapDefinition);
    TileMapDefinition getDefinition(String shortname);
}
