import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FrSpinnerService {
  public state: boolean = false;
  public spinnerStatusEvent: Subject<boolean> = new Subject();

  constructor() {}

  startSpinner() {
    this.state = true;
    this.spinnerStatusEvent.next();
  }

  stopSpinner() {
    this.state = false;
  }
}

