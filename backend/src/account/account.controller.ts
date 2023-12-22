import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from 'src/data-model';
import { AuthorizationGuard } from 'src/authorization/authorization.guard';
import { AccountNotFoundException } from 'src/account/exceptions/account-not-found.exception';

@Controller('/v1/account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @UseGuards(AuthorizationGuard)
  @Get('is-account-setup')
  async isAccountSetup(@Query('sub') sub: string): Promise<boolean> {
    return (await this.accountService.findOneBySub(sub)) ? true : false;
  }

  @UseGuards(AuthorizationGuard)
  @Get('find')
  async findAccount(@Query('sub') sub: string): Promise<Account> {
    const foundAccount = await this.accountService.findOneBySub(sub);
    if (!foundAccount) {
      throw new AccountNotFoundException();
    }
    this.removePrivateProperties(foundAccount);
    return foundAccount;
  }

  @Post('create')
  async createAccount(
    @Body() createAccountDto: CreateAccountDto,
  ): Promise<Account> {
    const account = new Account();
    account.sub = createAccountDto.sub;
    account.username = createAccountDto.username;
    const createdAccount = await this.accountService.create(account);
    this.removePrivateProperties(createdAccount);
    return createdAccount;
  }

  private removePrivateProperties(account: Account): void {
    account.sub = null;
  }
}
