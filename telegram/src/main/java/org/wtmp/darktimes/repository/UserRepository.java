package org.wtmp.darktimes.repository;

import org.springframework.stereotype.Component;
import org.wtmp.darktimes.game.user.User;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Component
public class UserRepository implements Repository<User> {
    private Set<User> users = new HashSet<>();

    public User findUserByName(String name) {
        Set<User> collect = users.stream()
                .filter(u -> u.getUsername().equals(name))
                .collect(Collectors.toSet());

        if(!collect.isEmpty())
            return collect.stream().findFirst().orElse(null);

        return null;
    }

    @Override
    public User add(User object) {
        users.add(object);
        return object;
    }

    @Override
    public User remove(User object) {
        users.remove(object);
        return object;
    }
}
