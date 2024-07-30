package org.wtmp.darktimes.game;

import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Builder
@EqualsAndHashCode
public class Item {
    protected String name;
    protected String description;
    protected int x;
    protected int y;
}
