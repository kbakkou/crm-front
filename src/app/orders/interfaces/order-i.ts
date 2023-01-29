import { ClientI } from 'src/app/clients/interfaces/client-i';
import { StateOrder } from '../enums/state-order';

export interface OrderI {
  tjmHt: number;
  nbJours: number;
  tva: number;
  state: StateOrder;
  typePresta: string;
  designation: string;
  client: ClientI;
  comment: string;
  id: number;
}
