package org.wtmp.darktimes.mvp;

import org.wtmp.darktimes.game.Creature;
import org.wtmp.darktimes.game.Player;
import org.wtmp.darktimes.observer.MessageListener;

import java.util.Set;

public interface CommandContract {
    interface Model {
    }

    interface Presenter extends MessageListener {
        void onStartCommand(Player player);
        void onLookCommand(Player player, int updateId);
        void onMoveCommand(Player player);
        void onHealthCommand(Player player);
        void onSayCommand(Player player, String phrase);
    }

    interface View {
        void printStartCommand(long chatId, String username);
        void printMoveCommand(long chatId, String description);
        void printLookCommand(long chatId, Player player, String roomName, String roomDescription,
                              String east, String west, String north, String south, Set<Creature> creatures);
        void printSayCommand(long chatId, String phrase);
        void printHealthCommand(long chatId, int maxHp, int currentHp);
    }
}
