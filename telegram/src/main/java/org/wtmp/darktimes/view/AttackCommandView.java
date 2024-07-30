package org.wtmp.darktimes.view;

import jakarta.inject.Inject;
import org.springframework.stereotype.Component;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.buttons.InlineKeyboardButton;
import org.wtmp.darktimes.game.Creature;
import org.wtmp.darktimes.service.BotService;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Component
public class AttackCommandView {
    @Inject
    BotService sender;

    public void printAttackCommand(long chatId, Set<Creature> creatures) {
        List<InlineKeyboardButton> buttons = new ArrayList<>();

        for (Creature creature : creatures) {
            buttons.add(InlineKeyboardButton.builder()
                    .text(creature.getIcon() + creature.getNickname())
                    .callbackData("callback")
                    .build());
        }

        sender.textMessageReply(chatId, "На кого вы хотите напасть?", List.of(buttons));
    }
}
