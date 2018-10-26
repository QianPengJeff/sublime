import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection-page',
  templateUrl: './selection-page.component.html',
  styleUrls: ['./selection-page.component.scss']
})
export class SelectionPageComponent implements OnInit {

  orderObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase, private router: Router) { }

  ngOnInit() {
  }

  name = localStorage.getItem('Name');
  size = localStorage.getItem('Size');
  price = localStorage.getItem('Price');
  sugars = "0";
  milk = "";
  number = 1;

  SelectQuantity = (operation: string) => {
    if(operation == "add") {
      this.number = this.number + 1;
    }
    if(operation == "remove" && this.number > 1) {
      this.number = this.number - 1;
    }
    localStorage.setItem('Number', this.number.toString());
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
    };
    this.db.list('/orders').push(data);
    console.log(data);
    this.router.navigateByUrl('/thankyou');
  }
  NavToCafe = () => {
    this.router.navigateByUrl('/cafe');
  }
}
