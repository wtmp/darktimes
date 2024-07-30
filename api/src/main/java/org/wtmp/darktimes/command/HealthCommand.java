package org.wtmp.darktimes.command;

import jakarta.inject.Inject;
import org.springframework.stereotype.Component;
import org.wtmp.darktimes.view.HealthCommandView;
import org.wtmp.darktimes.game.Player;
import org.wtmp.darktimes.game.user.User;
import org.wtmp.darktimes.observer.MessagePublisher;
import org.wtmp.darktimes.repository.PlayerRepository;

@Component
public class HealthCommand extends Command {
    @Inject
    HealthCommandView healthCommandView;

    @Inject
    PlayerRepository playerRepository;

    @Override
    public void accept(MessagePublisher listener) {
        listener.add(this);
    }

    @Override
    public void onCommand(User user, int messageId, String text) {
        if("/test".equals(text)) {
            Player player = playerRepository.findPlayerByUser(user);
            healthCommandView.printHealthCommand(user.getChatId(), 10, 30);
        }
    }
}
