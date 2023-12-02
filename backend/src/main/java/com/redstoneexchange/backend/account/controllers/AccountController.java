package com.redstoneexchange.backend.account.controllers;

import com.redstoneexchange.backend.account.services.AccountService;
import com.redstoneexchange.backend.data.entities.Account;
import jakarta.validation.constraints.NotBlank;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/account")
@CrossOrigin(origins = "http://localhost:5173")
public class AccountController {

    private final AccountService accountService;

    @GetMapping("/account-is-setup")
    public Boolean accountIsSetup(@RequestParam @NotBlank String sub) {
        return accountService.findBySub(sub) != null;
    }
}
