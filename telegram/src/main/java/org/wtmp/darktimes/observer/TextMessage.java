package org.wtmp.darktimes.observer;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TextMessage extends Message {
    protected String message;

    public TextMessage(long chatId, int messageId, String user, String message) {
        super(chatId, messageId, user);
        this.message = message;
    }

    public void accept(MessageListener listener) {
        listener.update(this);
    }
}
