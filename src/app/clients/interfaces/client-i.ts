import { StateClient } from '../enums/state-client';

export interface ClientI {
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  state: StateClient;

  id: number;
}
