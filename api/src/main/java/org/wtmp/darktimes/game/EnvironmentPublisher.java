package org.wtmp.darktimes.game;

public interface EnvironmentPublisher {
    void notifyAll(RuntimeObject environmentObject);
    void addListener(EnvironmentListener environmentListener);
}
