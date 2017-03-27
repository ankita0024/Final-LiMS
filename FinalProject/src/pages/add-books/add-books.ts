import { LimsAdminComponent } from './../../app/lims-admin/lims-admin.component';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';
/*
  Generated class for the AddBooks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-books',
  templateUrl: 'add-books.html'
})
export class AddBooksPage {
results:any;
  constructor(public nav: NavController, public navParams: NavParams) {}
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBooksPage');
  }
   home()
  {
    this.nav.setRoot(LimsAdminComponent);
  }
  scanBook(){
    BarcodeScanner.scan().then((barcodeData) => {
      this.results=barcodeData;
    },(err) => {
      alert(`error : ${err}`);
    });
  }
  resetBook(){
    this.results=null;
  }
  lookup(){
    window.open(`http://www.upcindex.com/${this.results.text}`, '_system');
  } 

}
