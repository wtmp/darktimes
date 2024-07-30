package org.wtmp.darktimes.game.user;

import java.util.HashMap;
import java.util.Map;

public class InMemoryUserRepository implements UserRepository {
    private Map<Long, User> users = new HashMap<>();

    @Override
    public void addUser(User user) {
        users.put(user.getChatId(), user);
    }

    @Override
    public User getUser(long chatId) {
        return users.get(chatId);
    }
}
