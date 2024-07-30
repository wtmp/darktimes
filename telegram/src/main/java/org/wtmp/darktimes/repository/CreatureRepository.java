package org.wtmp.darktimes.repository;

import org.springframework.stereotype.Component;
import org.wtmp.darktimes.game.Creature;

import java.util.HashSet;
import java.util.Set;

@Component
public class CreatureRepository implements Repository<Creature> {
    private Set<Creature> creatures = new HashSet<>();

    public Creature findByName(String nickname) {
        return creatures.stream()
                .filter(c -> c.getNickname().equals(nickname))
                .findFirst()
                .orElse(null);
    }

    public Set<Creature> findByXY(int x, int y) {
//        return creatures.stream()
//                .filter(c -> c.getX() == x && c.getY() == y)
//                .collect(Collectors.toSet());
        return null;
    }

    @Override
    public Creature add(Creature object) {
        creatures.add(object);
        return object;
    }

    @Override
    public Creature remove(Creature object) {
        creatures.remove(object);
        return object;
    }

    public CreatureRepository() {
//        add(new Creature("серая крыса", "\uD83D\uDC00", 0, 0, Creature.State.ACTIVE));
//        add(new Creature("летучая мышь", "\uD83E\uDD87", 0, 0, Creature.State.ACTIVE));
    }
}
