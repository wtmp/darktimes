package org.wtmp.darktimes.telegram;

import jakarta.annotation.PostConstruct;
import jakarta.inject.Inject;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.telegram.telegrambots.bots.DefaultBotOptions;
import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.TelegramBotsApi;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;
import org.telegram.telegrambots.updatesreceivers.DefaultBotSession;
import org.wtmp.darktimes.game.user.User;
import org.wtmp.darktimes.observer.*;
import org.wtmp.darktimes.service.PlayerService;
import org.wtmp.darktimes.service.UserService;

import java.util.HashSet;
import java.util.Set;

@Component
public class TelegramBot extends TelegramLongPollingBot implements MessagePublisher {

    private String botUsername;
    private String botToken;

    private Set<MessageListener> listeners = new HashSet<>();

    @Inject
    UserService userService;

    @Inject
    PlayerService playerService;

    @SneakyThrows
    public TelegramBot(@Value("${bot.token}") String botToken,
                       @Value("${bot.username}") String botUsername) {
        super(new DefaultBotOptions(), botToken);

        this.botToken = botToken;
        this.botUsername = botUsername;
    }

    @Override
    public void onUpdateReceived(Update update) {
        Message message = detectMessage(update);

        if (message != null) {
            User user = userService.create(message.getChatId(), message.getUser());
            playerService.create(user);

            notifyAll(message);
        }
    }

    private Message detectMessage(Update update) {
        Message message = null;

        if (update != null) {
            if (update.hasMessage()) {
                message = new TextMessage(update.getMessage().getChatId(),
                        update.getMessage().getMessageId(),
                        update.getMessage().getFrom().getUserName(),
                        update.getMessage().getText());
            } else if (update.hasCallbackQuery()) {
                org.telegram.telegrambots.meta.api.objects.User from =
                        update.getCallbackQuery().getFrom();

                message = new CallbackMessage(from.getId(), update.getCallbackQuery().getMessage().getMessageId(), from.getUserName(),
                        update.getCallbackQuery().getData());
            }
        }
        return message;
    }

    @Override
    public String getBotUsername() {
        return botUsername;
    }

    @PostConstruct
    private void onPostConstruct() throws TelegramApiException {
        new TelegramBotsApi(DefaultBotSession.class).registerBot(this);
    }

    @Override
    public void notifyAll(Message message) {
        listeners.stream().forEach(l -> {
            message.accept(l);
        });
    }

    @Override
    public void add(MessageListener listener) {
        listeners.add(listener);
    }

    @Override
    public void remove(MessageListener listener) {
        listeners.remove(listener);
    }
}