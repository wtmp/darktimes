package org.wtmp.darktimes.observer;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CallbackMessage extends Message {
    private String callback;

    public CallbackMessage(long chatId, int messageId, String user, String callback) {
        super(chatId, messageId, user);
        this.callback = callback;
    }

    public void accept(MessageListener listener) {
        listener.update(this);
    }
}
