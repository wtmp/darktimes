package org.wtmp.darktimes.game.creature;

import java.util.Set;

public interface CreatureRepository {
    void addCreature(Creature creature);
    Set<Creature> getCreatures(int x, int y);
}
