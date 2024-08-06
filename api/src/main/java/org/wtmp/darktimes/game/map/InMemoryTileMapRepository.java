package org.wtmp.darktimes.game.map;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.Resource;
import lombok.extern.java.Log;
import org.springframework.stereotype.Component;
import org.wtmp.darktimes.game.Point;
import org.wtmp.darktimes.utils.HeroexReaderUtils;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Log
@Component
public class InMemoryTileMapRepository implements TileMapRepository {
    private Map<Point, TileMap> tiles = new HashMap<>();

    @Override
    public void addTile(TileMap tileMap) {
        Point key = new Point(tileMap.getX(), tileMap.getY());
        tiles.put(key, tileMap);
    }

    @Override
    public TileMap getTile(int x, int y) {
        Point key = new Point(x, y);
        return tiles.get(key);
    }

    @Resource
    TileMapDefinitionRepository tileMapDefinitionRepository;

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

    private static final int SCALE_FACTOR = 3;

    @PostConstruct
    private void onPostConstruct() {
        long before = System.currentTimeMillis();

        log.info("Starting to create a map... [/]");

        HeroexReaderUtils heroexMap = new HeroexReaderUtils("./assets/map/world.bin");

        Random rnd = new Random();

        for (int y = 0; y < heroexMap.getHeight(); y++) {
            for (int x = 0; x < heroexMap.getWidth(); x++) {

                int terrain = heroexMap.getTerrainAt(x, y);

                TileMapDefinition definition[] = {null, null, null};

                definition[0] = tileMapDefinitionRepository.getDefinition("brown_tile");

                switch (terrain) {
                    case TILE_TYPE_UNDEFINED:
                        definition[0] = tileMapDefinitionRepository.getDefinition("black_tile");
                        break;

                    case TILE_TYPE_SEA:
                        definition[0] = tileMapDefinitionRepository.getDefinition("blue_tile");
                        break;

                    case TILE_TYPE_GRASSLAND:
                        definition[1] = tileMapDefinitionRepository.getDefinition("grass_tile");
                        definition[2] = tileMapDefinitionRepository.getDefinition("grass_tile");
                        break;
                    case TILE_TYPE_FOREST:
                        definition[1] = tileMapDefinitionRepository.getDefinition("tree_tile");
                        definition[2] = tileMapDefinitionRepository.getDefinition("fir_tree_tile");
                        break;
                    case TILE_TYPE_JUNGLE:
                        definition[1] = tileMapDefinitionRepository.getDefinition("jungle_tile");
                        definition[2] = tileMapDefinitionRepository.getDefinition("jungle_tile");
                        break;
                    case TILE_TYPE_DESERT:
                        definition[0] = tileMapDefinitionRepository.getDefinition("yellow_tile");
                        break;
                    case TILE_TYPE_GREEN_MOUNTAIN:
                        definition[0] = tileMapDefinitionRepository.getDefinition("mountain");
                        break;
                    case TILE_TYPE_BARREN_MOUNTAIN:
                        definition[0] = tileMapDefinitionRepository.getDefinition("snow_mountain");
                        break;
                    case TILE_TYPE_FROZEN:
                        definition[0] = tileMapDefinitionRepository.getDefinition("white_tile");
                        break;
                    case TILE_TYPE_RIVER:
                        definition[0] = tileMapDefinitionRepository.getDefinition("blue_tile");
                        break;

                    default:
                        throw new IllegalArgumentException("failed tile detected " + terrain);
                }

                if (definition != null) {
                    int startX = x * SCALE_FACTOR;
                    int startY = y * SCALE_FACTOR;

                    for (int j = startY; j < startY + SCALE_FACTOR; j++) {
                        for (int i = startX; i < startX + SCALE_FACTOR; i++) {
                            int r = rnd.nextInt(100);

                            if (r < 80) {
                                addTile(new TileMap(definition[0], i, j));
                            } else if (r < 85) {
                                if (definition[1] != null) {
                                    addTile(new TileMap(definition[1], i, j));
                                } else {
                                    addTile(new TileMap(definition[0], i, j));
                                }
                            } else if (r <= 100) {
                                if (definition[2] != null) {
                                    addTile(new TileMap(definition[2], i, j));
                                } else {
                                    addTile(new TileMap(definition[0], i, j));
                                }
                            }
                        }
                    }
                } else {
                    throw new IllegalArgumentException("tile definition should not be null " + terrain);
                }
            }
        }

        long result = System.currentTimeMillis() - before;
        log.info("Map was created: " + result + "ms");
    }
}
