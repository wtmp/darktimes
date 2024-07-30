package org.wtmp.darktimes.game.creature;

public interface CreatureDefinitionRepository {
    void addDefinition(CreatureDefinition creatureDefinition);
    CreatureDefinition getDefinition(String name);
}
