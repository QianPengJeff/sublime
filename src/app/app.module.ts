import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CateringPageComponent } from './pages/catering-page/catering-page.component';
import { CafePageComponent } from './pages/cafe-page/cafe-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SelectionPageComponent } from './pages/selection-page/selection-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ThankYouPageComponent } from './pages/thank-you-page/thank-you-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'catering', component: CateringPageComponent },
  { path: 'cafe', component: CafePageComponent },
  { path: 'selection', component: SelectionPageComponent },
  { path: 'order', component: OrderPageComponent },
  { path: 'thankyou', component: ThankYouPageComponent }
 ];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CateringPageComponent,
    CafePageComponent,
    SelectionPageComponent,
    OrderPageComponent,
    ThankYouPageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
