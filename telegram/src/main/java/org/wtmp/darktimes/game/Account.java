package org.wtmp.darktimes.game;

public interface Account {
    AccountOwner getAccountOwner();
    void changeOwnerTo(AccountOwner newAccountOwner);
    void closeAccount();
}
