package org.wtmp.darktimes.command;

import jakarta.inject.Inject;
import lombok.SneakyThrows;
import org.springframework.stereotype.Component;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.InlineKeyboardMarkup;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.buttons.InlineKeyboardButton;
import org.telegram.telegrambots.meta.api.objects.webapp.WebAppInfo;
import org.wtmp.darktimes.telegram.TelegramBot;
import org.wtmp.darktimes.view.AttackCommandView;
import org.wtmp.darktimes.game.Player;
import org.wtmp.darktimes.game.user.User;
import org.wtmp.darktimes.observer.MessagePublisher;
import org.wtmp.darktimes.service.CreatureService;
import org.wtmp.darktimes.service.PlayerService;

import java.util.List;

@Component
public class AttackCommand extends Command {
    @Inject
    TelegramBot telegramBot;

    @Override
    public void accept(MessagePublisher listener) {
        listener.add(this);
    }

    @SneakyThrows
    @Override
    public void onCommand(User user, int messageId, String command) {
        if("/attack".equals(command)) {
            telegramBot.execute(
                    SendMessage.builder()
                            .chatId(user.getChatId())
                            .text("text message")
                            .replyMarkup(InlineKeyboardMarkup
                                    .builder()
                                    .keyboardRow(List.of(InlineKeyboardButton
                                            .builder()
                                                    .text("Look123")
                                                    .webApp(WebAppInfo
                                                            .builder()
                                                            .url("https://wtmp.org:1982/api/1")
                                                            .build())
                                            .build()))
                                    .build())
                            .build()
            );
        }
    }
}
