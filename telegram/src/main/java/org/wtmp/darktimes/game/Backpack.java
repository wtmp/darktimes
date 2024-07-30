package org.wtmp.darktimes.game;

import java.util.List;

public interface Backpack {
    Item findItem(Item item);
    List<Item> look();
    void dropItem(Item item);
}
