import  {DepositService} from '../main/services/deposit-service/deposit.service'
export class newDepositModel {

  accountId: string;
  amount: number;

  constructor(accountId: string, amount: number) {
    this.accountId = accountId;
    this.amount = amount;

  }

  getData(): {accountId: string, amount: number}  {

    return {
      accountId: this.accountId,
      amount: this.amount
    };

  }

}

