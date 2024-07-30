package org.wtmp.darktimes.observer;

public interface MessageListener {
    void update(Message message);
    void update(TextMessage message);
    void update(CallbackMessage message);
}
