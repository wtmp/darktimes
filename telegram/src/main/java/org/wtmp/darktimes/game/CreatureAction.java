package org.wtmp.darktimes.game;

public interface CreatureAction {
    void moveAt(Way way);

    void flyTo(int x, int y);

    void swimTo(Way way);

    void lookAt(Way way);

    void lookAround();

    void attackTarget(Target target);
}
