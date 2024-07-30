package org.wtmp.darktimes.game.user;

import lombok.Builder;
import lombok.Getter;
import org.wtmp.darktimes.game.player.Player;

@Builder
@Getter
public class User {
    protected String username;
    protected long chatId;
    protected Player player;
}
