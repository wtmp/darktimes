package org.wtmp.darktimes.game;

import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Set;

@Data
@EqualsAndHashCode
@Builder
public class Dungeon {
    private int x;
    private int y;
    private String shortname;
    private String description;
    private Set<Room> rooms;
}
