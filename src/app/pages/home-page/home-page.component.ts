import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  Images = ['assets/images/sublime_1.jpg', 'assets/images/sublime_2.jpg', 'assets/images/sublime_3.jpg'];
  constructor() { }

  ngOnInit() {
  }

}
