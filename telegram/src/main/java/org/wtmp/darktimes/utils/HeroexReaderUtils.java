package org.wtmp.darktimes.utils;

import lombok.SneakyThrows;
import lombok.extern.java.Log;

import java.io.DataInput;
import java.io.FileInputStream;
import java.io.IOException;

/**
 * 🌲🌴🌳🌵🌱🌾🍀🍄☘🏔⛰🗻🏝🪨🪵🛖🏰⛺⛵🛶☃🔥👹🧔👩🟦🟧🟨🟫🟩⬜🧊🏕
 */
@Log
public class HeroexReaderUtils {
    public static final int FILE_VERSION = 2;
    public static final int UNUSED_BYTES = 8;
    private static final int PRE_COMPRESS_ABS_OFFSET = 1 << 30;
    private int height;
    private int width;
    private float worldWinDir;
    private int[][] tile;
    private int[][] contiguity;
    private float[][] elevation;
    private float[][] windZLevel;
    private float[][] rainfall;
    private float[][] temperature;

    @SneakyThrows
    public HeroexReaderUtils(String filename) {
        LittleEndianDataInputStream is = new LittleEndianDataInputStream(
                new FileInputStream(filename));
        readMap(is);
        is.close();
    }

    private void readMap(DataInput is) throws IOException {
        if (is == null) {
            throw new IllegalArgumentException("Input stream should not be null");
        }

        is.skipBytes(UNUSED_BYTES);

        int fileVersion = is.readInt();
        if(fileVersion != FILE_VERSION) {
            throw new IllegalArgumentException("Wrong version of map file");
        }

        width = is.readInt();
        height = is.readInt();
        worldWinDir = is.readFloat();

        tile = new int[width][height];
        contiguity = new int[width][height];
        elevation = new float[width][height];
        windZLevel = new float[width][height];
        rainfall = new float[width][height];
        temperature = new float[width][height];

        readTile(is);

        readContiguity(is);

        readElevation(is);

        readWindZLevel(is);

        readRainfall(is);

        readTemperature(is);

        log.info("Heroex map was loaded. Width: " + width + ", Weight: " + height);
    }

    private void readTemperature(DataInput is) throws IOException {
        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                float temperature = is.readFloat();

                if (x == 0) {
                    this.temperature[x][y] = temperature;
                } else {
                    this.temperature[x][y] = temperature + this.temperature[x - 1][y];
                }

                if (temperature < 0.0F) {
                    this.temperature[x][y] = 0.0F;
                }

                if (temperature > 1.0F) {
                    this.temperature[x][y] = 1.0F;
                }
            }
        }
    }

    private void readRainfall(DataInput is) throws IOException {
        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                float rainfall = is.readFloat();

                if (x == 0) {
                    this.rainfall[x][y] = rainfall;
                } else {
                    this.rainfall[x][y] = rainfall + this.rainfall[x - 1][y];
                }

                if (rainfall < 0.0F) {
                    this.rainfall[x][y] = 0.0F;
                }

                if (rainfall > 1.0F) {
                    this.rainfall[x][y] = 1.0F;
                }
            }
        }
    }

    private void readWindZLevel(DataInput is) throws IOException {
        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                float windZLevel = is.readFloat();

                if (x == 0) {
                    this.windZLevel[x][y] = windZLevel;
                } else {
                    this.windZLevel[x][y] = this.windZLevel[x - 1][y] + windZLevel;
                }

                if (windZLevel < 0.0F) {
                    this.windZLevel[x][y] = 0.0F;
                }

                if (windZLevel > 1.0F) {
                    this.windZLevel[x][y] = 1.0F;
                }
            }
        }
    }

    private void readElevation(DataInput is) throws IOException {
        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                float elevation = is.readFloat();

                if (x == 0) {
                    this.elevation[x][y] = elevation;
                } else {
                    this.elevation[x][y] = elevation + this.elevation[x - 1][y];
                }

                if (elevation < 0.0F) {
                    this.elevation[x][y] = 0.0F;
                }

                if (elevation > 1.0F) {
                    this.elevation[x][y] = 1.0F;
                }
            }
        }
    }

    private void readContiguity(DataInput is) throws IOException {
        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                int contiguity = is.readInt() - PRE_COMPRESS_ABS_OFFSET;
                if (x == 0) {
                    this.contiguity[x][y] = contiguity;
                } else {
                    this.contiguity[x][y] = contiguity + this.contiguity[x - 1][y];
                }
            }
        }
    }

    private void readTile(DataInput is) throws IOException {
        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                int tile = is.readByte() & 0xFF;
                if (x == 0) {
                    this.tile[x][y] = tile - 128;
                } else {
                    this.tile[x][y] = (tile - 128) + this.tile[x - 1][y];
                }
            }
        }
    }

    public int getWidth() {
        return width;
    }

    public int getHeight() {
        return height;
    }

    public int getTerrainAt(int x, int y) {
        return tile[x][y];
    }

    public float getElevationAt(int x, int y) {
        return elevation[x][y];
    }

    public float getWindAt(int x, int y) {
        return windZLevel[x][y];
    }

    public float getRainfallAt(int x, int y) {
        return rainfall[x][y];
    }

    public float getTemperatureAt(int x, int y) {
        return temperature[x][y];
    }
}
