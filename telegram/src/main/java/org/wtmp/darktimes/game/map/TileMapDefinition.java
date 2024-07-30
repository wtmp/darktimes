package org.wtmp.darktimes.game.map;

import lombok.Builder;
import lombok.Getter;
import org.wtmp.darktimes.game.Icon;

@Builder
@Getter
public class TileMapDefinition {
    protected Icon icon;
    protected String shortname;
    protected String description;
}
