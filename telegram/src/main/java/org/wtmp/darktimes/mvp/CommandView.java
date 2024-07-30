package org.wtmp.darktimes.mvp;

import jakarta.inject.Inject;
import org.springframework.stereotype.Component;
import org.wtmp.darktimes.game.Creature;
import org.wtmp.darktimes.game.Player;
import org.wtmp.darktimes.service.BotService;

import java.util.Set;

@Component
public class CommandView implements CommandContract.View {
    @Inject
    BotService sender;

    protected CommandPresenter presenter;

    public void setPresenter(CommandContract.Presenter presenter) {
        this.presenter = (CommandPresenter) presenter;
    }

    @Override
    public void printMoveCommand(long chatId, String description) {
        sender.textMessage(chatId, description);
    }

    @Override
    public void printLookCommand(long chatId, Player player, String roomName, String roomDescription,
                                 String east, String west, String north, String south, Set<Creature> creatures) {
        StringBuilder builder = new StringBuilder();

        builder.append("<b>").append(roomName).append("</b>\n\n").append(roomDescription);

        builder.append("\n\n");

        builder.append(String.format("%s%s\n", "                                   ", north));
        builder.append(String.format("%s%s%s%s\n", "Выходы:    ", west, "          ", east));
        builder.append(String.format("%s%s\n", "                                   ", south, ""));

        builder.append("\n");

        builder.append("Вы человек, \uD83E\uDDD4 " + player.getCreature().getNickname() + "\n\n");

        if(creatures != null && creatures.size() > 1) {
            builder.append("В комнате: \n");
            for (Creature creature : creatures) {
                if (!creature.equals(player.getCreature())) {
                    builder.append(creature.getIcon() + creature.getNickname() + "\n");
                }
            }
            builder.append("\n/attack");
        }

        sender.textMessage(chatId, builder.toString());
    }

    @Override
    public void printSayCommand(long chatId, String phrase) {
        sender.textMessage(chatId, phrase);
    }

    @Override
    public void printHealthCommand(long chatId, int maxHp, int currentHp) {
        sender.textMessage(chatId,
                String.format("Ваше здоровье \uD83E\uDEC0 %s из %s", currentHp, maxHp));
    }

    @Override
    public void printStartCommand(long chatId, String username) {
        sender.textMessage(chatId,
                "<code>" +
                        "                   |>>>\n" +
                        "                   |\n" +
                        "     |>>>      _  _|_  _\n" +
                        "     |        |;| |;| |;|\n" +
                        " _  _|_  _    \\\\.    .  /\n" +
                        "|;|_|;|_|;|    \\\\:. ,  /\n" +
                        "\\\\..      /    ||;   . |\n" +
                        " \\\\.  ,  /     ||:  .  |\n" +
                        "  ||:   |_   _ ||_ . _ | _\n" +
                        "  ||:  .|||_|;|_|;|_|;|_|;|_\n" +
                        "  ||:   ||.    .     .      |\n" +
                        "  ||: . || .     . .   .  , |\n" +
                        "  ||:   ||:  ,  _______   . |\n" +
                        "  ||:   || .   /+++++++\\    |\n" +
                        "  ||:   ||.    |+++++++| .  |\n" +
                        "_ ||: . ||: ,  |+++++++|.  .|\n" +
                        "  '--~~__|.    |+++++__|------\n" +
                        "         ~---__|,--~'\n\n\n" +
                        "  _-~-_-~-_-~-_-~-__-~-_-~-_\n" +
                        "  Т Е М Н Ы Е  В Р Е М Е Н А\n\n" +
                        "Добро пожаловать, " + username + "!</code>\n\n" +
                        "\uD83D\uDC41️\u200D\uD83D\uDDE8️ /look\n" +
                        "\uD83E\uDEC0 /health\n" +
                        "⬅ /west\n" +
                        "➡ /east\n" +
                        "⬆ /north\n" +
                        "⬇ /south"

        );
    }
}
