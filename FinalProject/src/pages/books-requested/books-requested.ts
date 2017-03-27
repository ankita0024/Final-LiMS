import { LimsAdminComponent } from './../../app/lims-admin/lims-admin.component';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the BooksRequested page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-books-requested',
  templateUrl: 'books-requested.html'
})
export class BooksRequestedPage {

  constructor(public nav: NavController, public navParams: NavParams) {}

home()
  {
    this.nav.setRoot(LimsAdminComponent);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BooksRequestedPage');
  }

}
