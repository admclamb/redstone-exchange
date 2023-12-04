package com.redstoneexchange.backend.account.exceptions;

import com.redstoneexchange.backend.account.labels.AccountLabels;

public class AccountNotFoundException extends RuntimeException {
    public AccountNotFoundException() { super(AccountLabels.accountNotFound);}
}
