package org.wtmp.darktimes.mvp;

import jakarta.annotation.PostConstruct;
import jakarta.inject.Inject;
import org.springframework.stereotype.Component;
import org.wtmp.darktimes.repository.CreatureRepository;
import org.wtmp.darktimes.repository.PlayerRepository;
import org.wtmp.darktimes.repository.RoomRepository;
import org.wtmp.darktimes.game.Creature;
import org.wtmp.darktimes.game.Player;
import org.wtmp.darktimes.game.Way;
import org.wtmp.darktimes.observer.Message;
import org.wtmp.darktimes.observer.CallbackMessage;
import org.wtmp.darktimes.observer.TextMessage;
import org.wtmp.darktimes.observer.MessagePublisher;
import org.wtmp.darktimes.service.CreatureService;
import org.wtmp.darktimes.service.RoomService;

import java.util.concurrent.atomic.AtomicReference;

@Component
public class CommandPresenter implements CommandContract.Presenter {
    @Inject
    MessagePublisher publisher;

    @Inject
    RoomRepository roomRepository;

    @Inject
    PlayerRepository playerRepository;

    @Inject
    CreatureRepository creatureRepository;

    @Inject
    CreatureService creatureService;

    @Inject
    RoomService roomService;

    @Inject
    CommandView view;

    @PostConstruct
    private void onPostConstruct() {
        publisher.add(this);
        view.setPresenter(this);
    }

    @Override
    public void update(CallbackMessage message) {
        System.out.println("reply message " + message);
    }

    @Override
    public void update(Message message) {
        System.out.println("message");
    }

    @Override
    public void update(TextMessage command) {
        //onUpdate(command);
    }

    private void onUpdate(TextMessage command) {
        String message = command.getMessage();

        Player player = playerRepository.findPlayerByUsername(command.getUser());

        Way way = null;

        switch (message) {
            case "/look":
                onLookCommand(player, command.getMessageId());
                break;
            case "/east":
                way = Way.GO_EAST;
                break;
            case "/west":
                way = Way.GO_WEST;
                break;
            case "/north":
                way = Way.GO_NORTH;
                break;
            case "/south":
                way = Way.GO_SOUTH;
                break;
            case "/health":
                onHealthCommand(player);
                break;
            case "/start":
                onStartCommand(player);
                break;

            default:
                if (message.charAt(0) != '/') {
                    onSayCommand(player, message);
                }
                break;
        }

        if (way != null) {
            onLeaveRoom(player);
            creatureService.go(player.getCreature(), way);
            onMoveCommand(player);
            onLookCommand(player, command.getMessageId());
        }
    }

    @Override
    public void onStartCommand(Player player) {
        view.printStartCommand(player.getUser().getChatId(),
                player.getUser().getUsername());
    }

    @Override
    public void onMoveCommand(Player player) {
//        Set<Player> playersXY = playerRepository.findPlayerByXY(
//                player.getCreature().getX(),
//                player.getCreature().getY()
//        );
//
//        if (playersXY.removeIf(p -> p.equals(player))) {
//        }
//
//        for (Player playerInRoom : playersXY) {
//            view.printMoveCommand(playerInRoom.getUser().getChatId(), "\n\uD83E\uDDD4" +
//                    playerInRoom.getCreature().getNickname() + " зашел в комнату.");
//        }
    }

    public void onLeaveRoom(Player player) {
//        Set<Player> playersXY = playerRepository.findPlayerByXY(player.getCreature().getX(),
//                player.getCreature().getY());
//
//        if (playersXY.removeIf(p -> p.equals(player))) {
//        }
//
//        for (Player playerInRoom : playersXY) {
//            view.printMoveCommand(playerInRoom.getUser().getChatId(), "\n\uD83E\uDDD4" +
//                    playerInRoom.getCreature().getNickname() + " вышел из комнаты.");
//        }
    }

    @Override
    public void onLookCommand(Player player, int updateId) {
        AtomicReference<String> east = new AtomicReference<>("➡ east");
        AtomicReference<String> west = new AtomicReference<>("⬅ west");
        AtomicReference<String> north = new AtomicReference<>("⬆ north");
        AtomicReference<String> south = new AtomicReference<>("⬇ south");

//        Room room = roomRepository.findByXY(player.getCreature().getX(), player.getCreature().getY());
//
//        roomService.around(room).keySet().forEach(w -> {
//                    if (w.equals(Way.GO_NORTH)) {
//                        north.set("⬆ /north");
//                    }
//                    if (w.equals(Way.GO_SOUTH)) {
//                        south.set("⬇ /south");
//                    }
//                    if (w.equals(Way.GO_EAST)) {
//                        east.set("➡ /east");
//                    }
//                    if (w.equals(Way.GO_WEST)) {
//                        west.set("⬅ /west");
//                    }
//                }
//        );
//
//        Set<Creature> creatures = creatureRepository.findByXY(player.getCreature().getX(),
//                        player.getCreature().getY())
//                .stream()
//                .collect(Collectors.toSet());

//        view.printLookCommand(
//                player.getUser().getChatId(),
//                player,
//                room.getShortname(),
//                room.getDescription(),
//                east.get(),
//                west.get(),
//                north.get(),
//                south.get(),
//                creatures
//        );
    }

    @Override
    public void onSayCommand(Player player, String phrase) {
        Creature c = player.getCreature();

//        Set<Player> players = playerRepository.findPlayerByXY(c.getX(), c.getY());

//        if (players.removeIf(p -> p.equals(player))) {
//            view.printSayCommand(player.getUser().getChatId(), "Вы произносите: " + phrase);
//        }
//
//        for (Player playersInRoom : players) {
//            Creature creature = playersInRoom.getCreature();
//
//            long chatId = playersInRoom.getUser().getChatId();
//
//            view.printSayCommand(chatId,
//                    "\n\uD83E\uDDD4" + creature.getNickname() + " произнес: " + phrase);
//        }
    }

    @Override
    public void onHealthCommand(Player player) {
        view.printHealthCommand(player.getUser().getChatId(), 10, 10);
    }
}
