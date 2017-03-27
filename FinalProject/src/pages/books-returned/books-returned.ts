import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LimsAdminComponent } from './../../app/lims-admin/lims-admin.component';

/*
  Generated class for the BooksReturned page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-books-returned',
  templateUrl: 'books-returned.html'
})
export class BooksReturnedPage {

  constructor(public nav: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooksReturnedPage');
  }
home()
  {
    this.nav.setRoot(LimsAdminComponent);

  }
}
