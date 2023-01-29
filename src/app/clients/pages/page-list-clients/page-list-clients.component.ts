import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { StateClient } from '../../enums/state-client';
import { Client } from '../../models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent {
  public clients$: BehaviorSubject<Client[]>;
  public states: string[];
  public headers: string[];

  constructor(private clientsService: ClientsService, private router: Router) {
    this.clients$ = this.clientsService.collection$;
    this.states = Object.values(StateClient);
    this.headers = [
      'Actions',
      'Company Name',
      'Prenom',
      'Nom',
      'Email',
      'Phone',
      'Adresse',
      'Ville',
      'State',
    ];
  }

  public changeState(client: Client, event: any): void {
    const state = event.target.value;
    this.clientsService.changeState(client, state).subscribe((data) => {
      Object.assign(client, data);
    });
  }

  public goToEdit(id: number): void {
    this.router.navigate(['clients', 'edit', id]);
  }

  public deleteItem(id: number): void {
    this.clientsService.deleteItem(id).subscribe();
  }
}
