package org.wtmp.darktimes.command;

import jakarta.inject.Inject;
import org.springframework.stereotype.Component;
import org.wtmp.darktimes.game.user.User;
import org.wtmp.darktimes.observer.MessagePublisher;
import org.wtmp.darktimes.service.MapService;

@Component
public class MapCommand extends Command {
    @Inject
    MapService mapService;

    @Override
    public void onCommand(User user, int messageId, String text) {

    }

    @Override
    public void accept(MessagePublisher listener) {
        listener.add(this);
    }
}
