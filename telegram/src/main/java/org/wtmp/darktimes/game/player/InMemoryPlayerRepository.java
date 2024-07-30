package org.wtmp.darktimes.game.player;

import org.springframework.stereotype.Component;
import org.wtmp.darktimes.game.Point;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

@Component
public class InMemoryPlayerRepository implements PlayerRepository {
    private Map<Point, Set<Player>> players = new HashMap<>();

    @Override
    public void addPlayer(Player player) {
        Point key = new Point(player.getX(), player.getY());

        Set<Player> playerSet = players.get(key);

        if(playerSet == null) {
            playerSet = new HashSet<>();
        }

        playerSet.add(player);

        players.put(key, playerSet);
    }

    @Override
    public Set<Player> getPlayers(int x, int y) {
        return players.get(new Point(x, y));
    }
}
