package org.wtmp.darktimes.service;

import jakarta.inject.Inject;
import lombok.SneakyThrows;
import org.springframework.stereotype.Component;
import org.telegram.telegrambots.meta.api.methods.ParseMode;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.methods.updatingmessages.EditMessageText;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.InlineKeyboardMarkup;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.buttons.InlineKeyboardButton;
import org.wtmp.darktimes.telegram.TelegramBot;

import java.util.List;

/**
 * Sends messages to telegram chat.
 */
@Component
public class BotService {
    @Inject
    TelegramBot gameBot;

    @SneakyThrows
    public void textMessage(long chatId, String text) {
        gameBot.execute(
                SendMessage
                        .builder()
                        .chatId(chatId)
                        .parseMode(ParseMode.HTML)
                        .text(text)
                        .build()
        );
    }

    @SneakyThrows
    public void editTextMessage(long chatId, int messageId, String text) {
    }

    @SneakyThrows
    public void textMessageReply(long chatId, String text, List<List<InlineKeyboardButton>> buttons) {
        gameBot.execute(
                SendMessage
                        .builder()
                        .chatId(chatId)
                        .replyMarkup(new InlineKeyboardMarkup(buttons))
                        .parseMode(ParseMode.HTML)
                        .text(text)
                        .build()
        );
    }

    @SneakyThrows
    public void editTextMessageReply(long chatId, int messageId, String text, List<List<InlineKeyboardButton>> buttons) {
        gameBot.execute(
                EditMessageText
                        .builder()
                        .chatId(chatId)
                        .messageId(messageId)
                        .replyMarkup(new InlineKeyboardMarkup(buttons))
                        .parseMode(ParseMode.HTML)
                        .text(text)
                        .build()
        );
    }
}
