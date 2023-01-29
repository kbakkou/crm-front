import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  public numVersion$: BehaviorSubject<number>;

  constructor() {
    this.numVersion$ = new BehaviorSubject(1);
  }

  public increment(): void {
    this.numVersion$.next(this.numVersion$.value + 1);
  }
}
