package com.redstoneexchange.backend.account.repositories;

import com.redstoneexchange.backend.data.entities.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
    Account findByUserId(String sub);
}
