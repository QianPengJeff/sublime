import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cafe-page',
  templateUrl: './cafe-page.component.html',
  styleUrls: ['./cafe-page.component.scss']
})
export class CafePageComponent implements OnInit {

  menuOptions: Observable<any[]>;
  constructor(private db: AngularFireDatabase, private router: Router) { }

  ngOnInit() {
    this.menuOptions = this.getMenu('/menus/0/coffee');
  }

  getMenu(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  NavToHome = () => {
    this.router.navigateByUrl('');
  }

  AddToJson = (name: string, size: string, price: string) => {
    localStorage.clear();
    localStorage.setItem('Name', name);
    localStorage.setItem('Size', size);
    localStorage.setItem('Price', price);
    console.log(localStorage.getItem('Name'));
    console.log(localStorage.getItem('Size'));
    console.log(localStorage.getItem('Price'));
    this.router.navigateByUrl('/selection');
  }
}
