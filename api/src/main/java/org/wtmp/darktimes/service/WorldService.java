package org.wtmp.darktimes.service;

import jakarta.annotation.PostConstruct;
import lombok.SneakyThrows;
import org.springframework.stereotype.Component;
import org.wtmp.darktimes.game.RuntimeObject;
import org.wtmp.darktimes.game.Point;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@Component
public class WorldService implements Runnable {
    private Map<Point, Set<RuntimeObject>> objects = new HashMap<>();

    @PostConstruct
    void onPostConstruct() {
        new Thread(this).start();
    }

    @SneakyThrows
    @Override
    public void run() {
        while (true) {
            Thread.sleep(1000);
        }
    }
}
