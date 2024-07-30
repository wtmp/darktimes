package org.wtmp.darktimes.game.creature;

import lombok.EqualsAndHashCode;
import lombok.Getter;

import java.util.UUID;

@EqualsAndHashCode
public class Creature {
    protected UUID uuid;

    protected CreatureStatus creatureStatus = new CreatureStatus();
    protected CreatureDefinition creatureDefinition;

    @Getter
    protected int x;

    @Getter
    protected int y;

    public void die() {
        creatureStatus.die();
    }

    public boolean isAlive() {
        return creatureStatus.isAlive();
    }

    public Creature(int x, int y, CreatureDefinition creatureDefinition) {
        this.uuid = UUID.randomUUID();
        this.creatureDefinition = creatureDefinition;
    }
}
