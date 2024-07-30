package org.wtmp.darktimes.game.creature;

public class CreatureStatus {
    private boolean isAlive;

    public CreatureStatus() {
        this.isAlive = true;
    }

    public void die() {
        this.isAlive = false;
    }

    public boolean isAlive() {
        return isAlive;
    }
}
