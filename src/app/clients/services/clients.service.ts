import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { StateClient } from '../enums/state-client';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private urlApi: string;
  public collection$: BehaviorSubject<Client[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;
    this.collection$ = new BehaviorSubject<Client[]>([]);
    this.refreshCollection();
  }

  public refreshCollection(): void {
    this.httpClient
      .get<Client[]>(`${this.urlApi}/clients`)
      .subscribe((data) => {
        this.collection$.next(data);
      });
  }

  public changeState(client: Client, state: StateClient): Observable<Client> {
    const item = new Client(client);
    item.state = state;
    return this.update(item);
  }

  public update(client: Client): Observable<Client> {
    return this.httpClient
      .put<Client>(`${this.urlApi}/clients/${client.id}`, client)
      .pipe(
        tap(() => {
          this.refreshCollection();
        })
      );
  }

  public add(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(`${this.urlApi}/clients`, client).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  public getItemById(id: number): Observable<Client> {
    return this.httpClient.get<Client>(`${this.urlApi}/clients/${id}`);
  }

  public deleteItem(id: number): Observable<Client> {
    return this.httpClient.delete<Client>(`${this.urlApi}/clients/${id}`).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }
}
