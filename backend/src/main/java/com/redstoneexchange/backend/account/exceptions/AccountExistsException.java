package com.redstoneexchange.backend.account.exceptions;

import com.redstoneexchange.backend.account.labels.AccountLabels;

public class AccountExistsException extends RuntimeException {

    public AccountExistsException() { super(AccountLabels.accountExists);}
}
