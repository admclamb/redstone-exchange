package com.redstoneexchange.backend.account.services;

import com.redstoneexchange.backend.account.repositories.AccountRepository;
import com.redstoneexchange.backend.data.entities.Account;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

@Service
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class AccountService {

    private final AccountRepository accountRepository;

    public Account findBySub(String sub) {
       return accountRepository.findByUserId(sub);
    }

    public Account save(Account account) {
        return accountRepository.save(account);
    }
}
