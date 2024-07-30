package org.wtmp.darktimes.repository;

import org.springframework.stereotype.Component;
import org.wtmp.darktimes.game.Creature;
import org.wtmp.darktimes.game.Player;
import org.wtmp.darktimes.game.user.User;

import java.util.HashSet;
import java.util.Set;

@Component
public class PlayerRepository implements Repository<Player> {
    private Set<Player> players = new HashSet<>();

    public Player findPlayerByUser(User user) {
        return players.stream()
                .filter(p -> p.getUser().equals(user))
                .findFirst()
                .orElse(null);
    }

    public Player findPlayerByUsername(String username) {
        return players.stream()
                .filter(p -> p.getUser().getUsername().equals(username))
                .findFirst()
                .orElse(null);
    }

    public Player findPlayerByCreature(Creature creature) {
        return players.stream()
                .filter(p -> p.getCreature().equals(creature))
                .findFirst()
                .orElse(null);
    }

    public Set<Player> findPlayerByXY(int x, int y) {
//        return players.stream().filter(p -> p.getCreature().getX() == x && p.getCreature().getY() == y)
//                .collect(Collectors.toSet());
        return null;
    }

    @Override
    public Player add(Player object) {
        players.add(object);
        return object;
    }

    @Override
    public Player remove(Player object) {
        players.remove(object);
        return object;
    }
}
