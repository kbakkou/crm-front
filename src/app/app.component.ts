import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  public title: string;
  private obs$: Observable<any>;
  private subj$: Subject<any>;
  private behav$: BehaviorSubject<any>;
  private sub: Subscription;

  constructor() {
    this.title = 'crm';
    this.obs$ = new Observable((listX) => {
      listX.next(Math.random());
    });
    this.subj$ = new Subject();
    this.behav$ = new BehaviorSubject('toto');
    this.sub = this.obs$.subscribe((string) => console.log(string));

    // this.obs$.subscribe((string) => console.log(string));

    // this.subj$.subscribe((data) => console.log(data));
    // this.subj$.next('toto');
    // this.subj$.subscribe((data) => console.log(data));
    // this.subj$.next(Math.random());
    // this.subj$.subscribe((data) => console.log(data));
    // this.behav$.subscribe((totostring) => console.log(totostring));
    // this.behav$.next('toto2');
    // this.behav$.subscribe((data) => console.log(data));
    // this.behav$.next('toto3');
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
