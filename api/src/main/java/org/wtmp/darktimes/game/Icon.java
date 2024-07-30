package org.wtmp.darktimes.game;

import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Builder
@EqualsAndHashCode
public class Icon {
    protected int code;
    protected String symbol;
    protected String name;
    protected String description;
}
