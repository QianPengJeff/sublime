import { Component } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Routes, RouterModule} from "@angular/router";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CateringPageComponent } from './pages/catering-page/catering-page.component';
import { CafePageComponent } from './pages/cafe-page/cafe-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  //read from firebase
  cartypeObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {
  }
  getUsers(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}
