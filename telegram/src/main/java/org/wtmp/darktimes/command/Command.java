package org.wtmp.darktimes.command;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.wtmp.darktimes.game.user.User;
import org.wtmp.darktimes.observer.*;
import org.wtmp.darktimes.telegram.TelegramBot;

public abstract class Command implements MessageListener {
    @Autowired
    @Qualifier("telegramBot")
    protected TelegramBot gameBot;

    public abstract void accept(MessagePublisher listener);

    public abstract void onCommand(User user, int messageId, String command);

    @PostConstruct
    void onPostConstruct() {
        accept(gameBot);
    }

    @Override
    public void update(TextMessage message) {
        if (message != null) {
                onCommand(User.builder()
                        .chatId(message.getChatId())
                        .username(message.getUser())
                        .build(),
                        message.getMessageId(),
                        message.getMessage());
        }
    }

    @Override
    public void update(CallbackMessage message) {
        if (message != null) {
                onCommand(User.builder()
                        .username(message.getUser())
                        .chatId(message.getChatId())
                        .build(),
                        message.getMessageId(),
                        message.getCallback());
        }
    }

    @Override
    public void update(Message message) {
    }
}
