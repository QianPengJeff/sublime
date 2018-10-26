import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  templateUrl: './thank-you-page.component.html',
  styleUrls: ['./thank-you-page.component.scss']
})
export class ThankYouPageComponent implements OnInit {

  sugar = localStorage.getItem('Sugars') === '1' ? 'Sugar' : 'Sugars' ;
  message = `Your ${localStorage.getItem('Size')} ${localStorage.getItem('Name')} with ${localStorage.getItem('Sugars')} ${this.sugar} and ${localStorage.getItem('Milk')} Milk has been placed!`;

  constructor() { }

  ngOnInit() {
  }

}
