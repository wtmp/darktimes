package org.wtmp.darktimes.game;

import java.util.List;

public interface Bank {
    List<Account> getAccounts();

    List<AccountOwner> getAccountOwners();

    Account findAccount(AccountOwner accountOwner);

    void addAccount(Account account);

    void addMoneyAtAccount(Account account, int money);

    void removeAccount(Account account);

    void transfer(Account from, Account to, int money);
}
