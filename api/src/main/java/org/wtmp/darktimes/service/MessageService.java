package org.wtmp.darktimes.service;

import org.wtmp.darktimes.observer.Message;

public interface MessageService {
    void send(Message message, String body);
    void edit(Message message);
    void delete(Message message);
    void dispatch(Message message);
}
