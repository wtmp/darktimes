package org.wtmp.darktimes.game;

import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.wtmp.darktimes.game.user.User;

@Data
@Builder
@EqualsAndHashCode
public class Player {
    private User user;
    private Creature creature;
    private Account account;
    private Bank bank;
}
