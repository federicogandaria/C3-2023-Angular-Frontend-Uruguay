import { CustomerInterface } from "src/app/main/interfaces/Customer.interface";

export interface  AccountInterface
{accountUser:
  {
    customer: CustomerInterface;
    accountType: AccountInterface;
    acc_Balance: number;
    deletedAt?: number | Date
    id: string;
    state: boolean;
  }

}
