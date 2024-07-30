package org.wtmp.darktimes.service;

import jakarta.inject.Inject;
import org.springframework.stereotype.Component;
import org.wtmp.darktimes.repository.RoomRepository;
import org.wtmp.darktimes.game.Room;
import org.wtmp.darktimes.game.Way;

import java.util.HashMap;
import java.util.Map;

@Component
public class RoomService {
    @Inject
    RoomRepository roomRepository;

    public Map<Way, Room> around(Room room) {
        HashMap<Way, Room> rooms = new HashMap<>();

        roomRepository.findAllRooms().stream()
                .forEach(r -> {
                    int x = room.getX();
                    int y = room.getY();

                    int dx = Math.abs(x - r.getX());
                    int dy = Math.abs(y - r.getY());

                    if(dx == 1 && y == r.getY()) {
                        if(r.getX() > x) {
//                            rooms.put(Way.EAST, r);
                        } else {
//                            rooms.put(Way.WEST, r);
                        }
                    }

                    if(dy == 1 && x == r.getX()) {
                        if(r.getY() > y) {
//                            rooms.put(Way.NORTH, r);
                        } else {
//                            rooms.put(Way.SOUTH, r);
                        }
                    }
                });

        return rooms;
    }
}
