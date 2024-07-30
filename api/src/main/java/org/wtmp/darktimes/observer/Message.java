package org.wtmp.darktimes.observer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Message {
    protected long chatId;
    protected int messageId;
    protected String user;

    public void accept(MessageListener listener) {
        listener.update(this);
    }
}
