package org.wtmp.darktimes.service;

import jakarta.inject.Inject;
import org.springframework.stereotype.Component;
import org.wtmp.darktimes.repository.UserRepository;
import org.wtmp.darktimes.game.user.User;

@Component
public class UserService {
    @Inject
    UserRepository userRepository;

    public User create(long chatId, String username) {
//        User user = userRepository.findUserByName(username);
//        if(user == null) {
//            user = userRepository.add(new User(username, chatId));
//        }
//        return user;

        return null;
    }
}
