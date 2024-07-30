package org.wtmp.darktimes.game.player;

import java.util.Set;

public interface PlayerRepository {
    void addPlayer(Player player);
    Set<Player> getPlayers(int x, int y);
}
