import { Component, OnInit } from '@angular/core';
import { FrSpinnerService } from '../../../fr-core-services/Services/fr-spinner.service';

@Component({
  selector: 'app-twilio-spinner',
  templateUrl: './twilio-spinner.component.html',
  styleUrls: ['./twilio-spinner.component.scss'],
})
export class TwilioSpinnerComponent implements OnInit {
  public active: boolean = true;

  constructor(public spinner: FrSpinnerService) {}

  ngOnInit() {}

}
