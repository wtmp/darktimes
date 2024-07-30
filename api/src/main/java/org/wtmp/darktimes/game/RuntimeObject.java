package org.wtmp.darktimes.game;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
@AllArgsConstructor
public abstract class RuntimeObject {
    protected String name;
    protected String description;
    protected int temperature;
}
