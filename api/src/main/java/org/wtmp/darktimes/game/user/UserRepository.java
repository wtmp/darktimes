package org.wtmp.darktimes.game.user;

public interface UserRepository {
    void addUser(User user);
    User getUser(long chatId);
}
