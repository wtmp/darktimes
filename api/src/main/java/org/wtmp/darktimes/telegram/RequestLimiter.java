package org.wtmp.darktimes.telegram;

import lombok.SneakyThrows;

import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

public class RequestLimiter {
    private static final int RATE_LIMIT = 30; // Максимум 30 запросов в минуту
    private final BlockingQueue<Runnable> requestQueue = new LinkedBlockingQueue<>();
    private final long interval = 60000 / RATE_LIMIT; // Интервал между запросами 60000

    public RequestLimiter() {
        new Thread(this::processQueue).start();
    }

    @SneakyThrows
    public void addRequest(Runnable request) {
        requestQueue.add(request);
    }

    private void processQueue() {
        while (true) {
            try {
                Runnable request = requestQueue.take();
                request.run();
                Thread.sleep(interval);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
    }
}