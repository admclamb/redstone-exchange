package com.redstoneexchange.backend.account.exceptions;

import com.redstoneexchange.backend.account.labels.AccountLabels;

public class UsernameExistsException extends RuntimeException {
    public UsernameExistsException() {super(AccountLabels.usernameExists);}
}
