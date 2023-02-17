import { AccountInterface } from './Account.interface'

export interface TransfersInterface {
  id : string;
  outCome: AccountInterface;
  inCome: AccountInterface;
  amount: number;
  reason: string;
  dateTime: number | Date;
  deletedAt?: number | Date;

}
