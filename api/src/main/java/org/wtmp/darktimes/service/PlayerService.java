package org.wtmp.darktimes.service;

import jakarta.inject.Inject;
import org.springframework.stereotype.Component;
import org.wtmp.darktimes.game.user.User;
import org.wtmp.darktimes.repository.IconRepository;
import org.wtmp.darktimes.repository.PlayerRepository;
import org.wtmp.darktimes.game.*;

import java.util.Set;

@Component
public class PlayerService {
    @Inject
    PlayerRepository playerRepository;

    @Inject
    IconRepository iconRepository;

    public Player create(User user) {
        Player player = playerRepository.findPlayerByUser(user);

        if (player == null) {
//            Creature creature = Creature.builder()
//                    .icon(iconRepository.findByCode(66)) //🧔
//                    .nickname(HumanNicknameGenerator.generate(HumanNicknameGenerator.Type.MALE))
//                    .x(0)
//                    .y(0)
//                    .build();
//
//            player = Player.builder()
//                    .user(user)
//                    .creature(creature)
//                    .build();
//
//            playerRepository.add(player);
        }

        return player;
    }

    public Player findPlayerByUser(User user) {
        return playerRepository.findPlayerByUser(user);
    }

    public Player findPlayerByUsername(String username) {
        return playerRepository.findPlayerByUsername(username);
    }

    public Player findPlayerByCreature(Creature creature) {
        return playerRepository.findPlayerByCreature(creature);
    }

    public Set<Player> findPlayerByXY(int x, int y) {
        return playerRepository.findPlayerByXY(x, y);
    }
}
