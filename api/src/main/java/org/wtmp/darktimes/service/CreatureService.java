package org.wtmp.darktimes.service;

import jakarta.inject.Inject;
import org.springframework.stereotype.Component;
import org.wtmp.darktimes.game.*;
import org.wtmp.darktimes.repository.CreatureRepository;
import org.wtmp.darktimes.repository.RoomRepository;

import java.util.Set;

/**
 *
 */
@Component
public class CreatureService {
    @Inject
    RoomRepository roomRepository;

    @Inject
    RoomService roomService;

    @Inject
    CreatureRepository creatureRepository;

    public Creature findByName(String nickname) {
        return creatureRepository.findByName(nickname);
    }

    public Set<Creature> findByXY(int x, int y) {
        return creatureRepository.findByXY(x, y);
    }

    public boolean go(Creature creature, Way way) {
        Room room = look(creature, way);
        if(room != null) {
//            creature.setX(room.getX());
//            creature.setY(room.getY());
            return true;
        }
        return false;
    }

    public Room look(Creature creature, Way way) {
//        Room room = roomRepository.findByXY(creature.getX(), creature.getY());
//        Map<Way, Room> around = roomService.around(room);
//        Room r = around.get(way);
//        if(way != null) {
//            return r;
//        }
//        return null;
        return null;
    }

    public boolean check(Creature creature, Way way) {
        return look(creature, way) == null ? false : true;
    }

    public Creature createCreature(String name, CreatureType type) {
        return null;
    }

//    public void performAction(Creature creature, Action action) {
//        action.execute(creature);
//    }

    public void validateCreature(Creature creature) {

    }

//    public void moveCreature(Creature creature, Position newPosition) {
//
//    }
//
//    public void changeState(Creature creature, State newState) {
//        //creature.setState(newState);
//    }
}