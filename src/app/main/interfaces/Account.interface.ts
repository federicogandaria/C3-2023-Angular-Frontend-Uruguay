import { CustomerInterface } from './Customer.interface';
import { AccountTypeInterface } from './Account-type.interface';
export interface AccountInterface {


    id: string;
    customer: CustomerInterface;
    accountType: AccountTypeInterface;
    balance: number;
    state:boolean;
    deletedAt?: number | Date;

  

}
