import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection-page',
  templateUrl: './selection-page.component.html',
  styleUrls: ['./selection-page.component.scss']
})
export class SelectionPageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  name = localStorage.getItem('Name');
  size = localStorage.getItem('Size');
  price = localStorage.getItem('Price');
  sugars = "";
  milk = "";
  number = 1;

  SelectQuantity = (operation: string) => {
    if(operation == "add") {
      this.number = this.number + 1;
    }
    if(operation == "remove" && this.number > 1) {
      this.number = this.number - 1;
    }
    localStorage.setItem('Numebr', this.number.toString());
    console.log(localStorage.getItem('Number'));
  };

  SelectSugar = (sugar: string) => {
    localStorage.setItem('Sugars', sugar);
    console.log(localStorage.getItem('Sugars'));
    this.sugars = sugar;
  };

  SelectMilk = (milk: string) => {
    localStorage.setItem('Milk', milk);
    console.log(localStorage.getItem('Milk'));
    this.milk = milk;
  };

  generateNumber = () => {
    return (Math.floor(100000 + Math.random() * 900000)).toString();
  }

  ConfirmOrder = () => {
    var data = {
      "firstName":"Stuff",
      "lastName":"Carsales",
      "items":[
         {
            name: localStorage.getItem('Name'),
            number: localStorage.getItem('Number'),
            size: localStorage.getItem('Size'),
            price: localStorage.getItem('Price'),
            sugars: localStorage.getItem('Sugars'),
            milk: localStorage.getItem('milk'),
            other: ''
         }
      ],
      "orderNo": this.generateNumber(),
      "completed":"fales"
    }
  }
  // this.db.list('/orders').push(this.order);
}
