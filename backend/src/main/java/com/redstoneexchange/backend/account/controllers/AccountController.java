package com.redstoneexchange.backend.account.controllers;

import com.redstoneexchange.backend.account.dtos.AccountToCreateDTO;
import com.redstoneexchange.backend.account.exceptions.AccountExistsException;
import com.redstoneexchange.backend.account.exceptions.AccountNotFoundException;
import com.redstoneexchange.backend.account.exceptions.UsernameExistsException;
import com.redstoneexchange.backend.account.services.AccountService;
import com.redstoneexchange.backend.data.entities.Account;
import jakarta.validation.constraints.NotBlank;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Date;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/account")
@CrossOrigin(origins = "http://localhost:5173")
public class AccountController {

    private final AccountService accountService;

    @GetMapping("/find")
    public Account findAccountBySub(@RequestParam @NotBlank String sub) {
        Account foundAccount = accountService.findBySub(sub);
        if (foundAccount == null ) {
            throw new AccountNotFoundException();
        }
        removePrivateProperties(foundAccount);
        return foundAccount;
    }

    @GetMapping("/account-is-setup")
    public Boolean accountIsSetup(@RequestParam @NotBlank String sub) {
        return accountService.findBySub(sub) != null;
    }

    @PostMapping("/create")
    public Account createAccount(@RequestBody AccountToCreateDTO accountDTO) {
        Account foundAccount = accountService.findBySub(accountDTO.sub);
        if (foundAccount != null) {
            throw new AccountExistsException();
        }

        Account foundUsername = accountService.findByUsername(accountDTO.getUsername());
        if (foundUsername != null) {
            throw new UsernameExistsException();
        }

        Account accountToCreate = mapToAccountEntity(accountDTO);
        createCurrentTimestamps(accountToCreate);
        Account createdAccount = accountService.save(accountToCreate);
        removePrivateProperties(createdAccount);
        return createdAccount;
    }

    private void removePrivateProperties(Account account) {
        account.setUserId(null);
    }

    private void createCurrentTimestamps(Account account) {
        account.setCreatedAt(LocalDateTime.now());
        account.setUpdatedAt(LocalDateTime.now());
    }

    private Account mapToAccountEntity(AccountToCreateDTO accountToCreateDTO) {
        Account account = new Account();
        account.setUserId(accountToCreateDTO.getSub());
        account.setUsername(accountToCreateDTO.getUsername());
        return account;
    }
}
