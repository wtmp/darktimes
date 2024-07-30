package org.wtmp.darktimes.game;

import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Builder
@EqualsAndHashCode
public class Creature {
    private String nickname;
    private Icon icon;
}
