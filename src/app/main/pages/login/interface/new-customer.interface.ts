import { newCustomerModel } from '../../models/new-customer.model';


export interface INewUser {
  success: boolean;
  data: newCustomerModel;
}
