export interface CustomerInterface{
  id: string;
  documentType: DocumentTypeModel;
  document: string;
  fullName: string;
  email: string;
  phone: number;
  password: string;
  avatarUrl?: string;
  state: boolean;
  daletedAt?: Date | number;
  token : string;
}

export interface DocumentTypeModel {
  id: string;
  name: string;
  state: boolean;
}
