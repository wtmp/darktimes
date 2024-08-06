package org.wtmp.darktimes.game.creature;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.wtmp.darktimes.game.Point;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

@Component
public class InMemoryCreatureRepository implements CreatureRepository {
    private Map<Point, Set<Creature>> creatures = new HashMap<>();

    @Autowired
    CreatureDefinitionRepository creatureDefinitionRepository;

    @Override
    public void addCreature(Creature creature) {
        Point key = new Point(creature.getX(), creature.getY());

        Set<Creature> creatureSet = creatures.get(key);
        if(creatureSet == null) {
            creatureSet = new HashSet<>();
        }

        creatureSet.add(creature);

        creatures.put(key, creatureSet);
    }

    @Override
    public Set<Creature> getCreatures(int x, int y) {
        return creatures.get(new Point(x, y));
    }

    @PostConstruct
    private void onPostConstruct() {
        addCreature(
                new Creature(0, 0, creatureDefinitionRepository.getDefinition("rat"))
        );

        addCreature(
                new Creature(0, 0, creatureDefinitionRepository.getDefinition("rat"))
        );

        addCreature(
                new Creature(0, 0, creatureDefinitionRepository.getDefinition("rat"))
        );

        addCreature(
                new Creature(0, 0, creatureDefinitionRepository.getDefinition("bat"))
        );
    }
}
