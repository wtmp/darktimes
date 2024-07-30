package org.wtmp.darktimes.observer;

public interface MessagePublisher {
    void notifyAll(Message message);

    void add(MessageListener listener);

    void remove(MessageListener listener);
}
