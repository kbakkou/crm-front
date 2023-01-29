import { Component } from '@angular/core';

@Component({
  selector: 'app-ui2',
  templateUrl: './ui2.component.html',
  styleUrls: ['./ui2.component.scss'],
})
export class Ui2Component {
  public close: boolean;

  constructor() {
    this.close = false;
  }

  public toggle(): void {
    this.close = !this.close;
  }
}
