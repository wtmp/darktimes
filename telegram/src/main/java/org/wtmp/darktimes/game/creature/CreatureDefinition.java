package org.wtmp.darktimes.game.creature;

import lombok.Builder;
import lombok.Data;
import org.wtmp.darktimes.game.Icon;

@Data
@Builder
public class CreatureDefinition {
    private Icon icon;
    private String shortname;
    private String description;
    private int health;
    private int attack;
    private int defence;
}
