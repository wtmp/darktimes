package org.wtmp.darktimes.telegram;

import org.telegram.telegrambots.bots.DefaultAbsSender;
import org.telegram.telegrambots.meta.api.methods.ParseMode;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.methods.updatingmessages.EditMessageText;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.InlineKeyboardMarkup;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.ReplyKeyboard;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;

import java.io.ByteArrayOutputStream;
import java.io.PrintWriter;
import java.io.Writer;

/**
 * Output data to a chat
 */
public class TelegramChatResponse implements ChatResponse {
    protected long chatId = 0;

    protected int messageId = 0;

    protected ReplyKeyboard replyKeyboard;

    public TelegramChatResponse(long chatId, int messageId) {
        this.chatId = chatId;
        this.messageId = messageId;
    }

    private PrintWriter writer = new PrintWriter(new ByteArrayOutputStream());
    ;

    public Writer getWriter() {
        return writer;
    }

    public void execute(DefaultAbsSender sender, RequestLimiter requestLimiter) {
        requestLimiter.addRequest(() -> {
            if (messageId > 0) {
                try {
                    sender.execute(
                            EditMessageText
                                    .builder()
                                    .chatId(chatId)
                                    .messageId(messageId)
                                    .parseMode(ParseMode.HTML)
                                    .replyMarkup((replyKeyboard instanceof InlineKeyboardMarkup)
                                            ? (InlineKeyboardMarkup) replyKeyboard
                                            : null)
                                    .text(getWriter().toString())
                                    .build()
                    );
                } catch (TelegramApiException e) {
                    throw new RuntimeException(e);
                }
            } else {
                try {
                    sender.execute(
                            SendMessage
                                    .builder()
                                    .chatId(chatId)
                                    .parseMode(ParseMode.HTML)
                                    .replyMarkup(replyKeyboard)
                                    .text(getWriter().toString())
                                    .build()
                    );
                } catch (TelegramApiException e) {
                    throw new RuntimeException(e);
                }
            }
        });
    }

    public void setReplyKeyboard(ReplyKeyboard replyKeyboard) {
        this.replyKeyboard = replyKeyboard;
    }
}
