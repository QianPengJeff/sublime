import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

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
    this.cartypeObservable = this.getUsers('/carType');
  }
  getUsers(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}
