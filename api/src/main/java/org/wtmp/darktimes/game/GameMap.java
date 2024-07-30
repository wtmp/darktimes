package org.wtmp.darktimes.game;

import java.util.List;

public interface GameMap {
    int getWidth();

    int getHeight();

    int findTerrainAt(int x, int y);

    float findElevationAt(int x, int y);

    float findWindAt(int x, int y);

    float findRainAt(int x, int y);

    float findTemperatureAt(int x, int y);

    List<Item> findItemsAt(int x, int y);

    List<Creature> findCreaturesAt(int x, int y);

    GameMap findEntryAt(int x, int y);
}