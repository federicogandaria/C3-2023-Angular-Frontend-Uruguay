export class ShowDepositModel{
  id: string;
  accountId: string;
  amount: number;

  constructor(id: string, accountId: string, amount:number){
    this.id = id;
    this.accountId = accountId;
    this.amount = amount;
  }

  getData():{id:string; accountId: string; amount:number;} {
    return{
      id: this.id,
      accountId: this.accountId,
      amount: this.amount
    }

  }


}
