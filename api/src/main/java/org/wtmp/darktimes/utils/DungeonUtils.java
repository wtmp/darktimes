package org.wtmp.darktimes.utils;

import org.wtmp.darktimes.game.Dungeon;
import org.wtmp.darktimes.game.Room;

import java.util.HashSet;
import java.util.NoSuchElementException;
import java.util.Set;

public class DungeonUtils {
    private Set<Room> rooms = new HashSet<>();

    private String shortname;

    private int x;
    private int y;

    int currentRoomX = 0;
    int currentRoomY = 0;

    public DungeonUtils(int x, int y, String shortname) {
        this.shortname = shortname;

        this.x = x;
        this.y = y;

        rooms.add(Room.builder()
                .x(0)
                .y(0)
                .shortname(shortname)
                .description("Вы стоите у входа в " + shortname)
                .build());
    }

    private Room findXY(int x, int y) {
        try {
            return rooms.stream()
                    .filter(e -> e.getX() == x && e.getY() == y)
                    .findFirst()
                    .get();
        } catch (NoSuchElementException e) {
            return null;
        }
    }

    public DungeonUtils moveUp() {
        this.currentRoomY += 1;
        return this;
    }

    public DungeonUtils moveDown() {
        this.currentRoomY -= 1;
        return this;
    }

    public DungeonUtils moveRight() {
        this.currentRoomX += 1;
        return this;
    }

    public DungeonUtils moveLeft() {
        this.currentRoomX -= 1;
        return this;
    }

    public DungeonUtils addUp(String title, String description) {
        Room room = findXY(currentRoomX, currentRoomY + 1);
        if (room == null) {
            rooms.add(Room.builder()
                    .x(currentRoomX)
                    .y(currentRoomY + 1)
                    .shortname(title)
                    .description(description)
                    .build());
        } else {
            throw new UnsupportedOperationException("Room in this coordinates already exists. " + room);
        }
        return this;
    }

    public DungeonUtils addDown(String title, String description) {
        Room room = findXY(currentRoomX, currentRoomY - 1);
        if (room == null) {
            rooms.add(Room.builder()
                    .x(currentRoomX)
                    .y(currentRoomY - 1)
                    .shortname(title)
                    .description(description)
                    .build());
        } else {
            throw new UnsupportedOperationException("Room in this coordinates already exists. " + room);
        }
        return this;
    }

    public DungeonUtils addRight(String title, String description) {
        Room room = findXY(currentRoomX + 1, currentRoomY);
        if (room == null) {
            rooms.add(Room.builder()
                    .x(currentRoomX + 1)
                    .y(currentRoomY)
                    .shortname(title)
                    .description(description)
                    .build());
        } else {
            throw new UnsupportedOperationException("Room in this coordinates already exists. " + room);
        }
        return this;
    }

    public DungeonUtils addLeft(String title, String description) {
        Room room = findXY(currentRoomX - 1, currentRoomY);
        if (room == null) {
            rooms.add(Room.builder()
                            .x(currentRoomX - 1)
                            .y(currentRoomY)
                            .shortname(title)
                            .description(description)
                            .build());
        } else {
            throw new UnsupportedOperationException("Room in this coordinates already exists. " + room);
        }
        return this;
    }

    public Dungeon build() {
        return Dungeon.builder()
                .x(x)
                .y(y)
                .shortname(shortname)
                .rooms(rooms)
                .build();
    }
}
