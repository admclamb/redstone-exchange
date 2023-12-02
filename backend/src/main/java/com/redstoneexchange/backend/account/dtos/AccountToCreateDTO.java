package com.redstoneexchange.backend.account.dtos;

import com.redstoneexchange.backend.account.labels.AccountLabels;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class AccountToCreateDTO {

    @NotNull(message = AccountLabels.userSubRequired)
    public String sub;

    @NotNull(message = AccountLabels.usernameRequired)
    @Size(max = 100, message = AccountLabels.usernameMaximum)
    public String username;

    public String getSub() {
        return sub;
    }

    public void setSub(String sub) {
        this.sub = sub;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
