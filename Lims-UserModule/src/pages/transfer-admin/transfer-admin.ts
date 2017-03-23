import { LimsAdminComponent } from './../../app/lims-admin/lims-admin.component';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the TransferAdmin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-transfer-admin',
  templateUrl: 'transfer-admin.html'
})
export class TransferAdminPage {

  constructor(public nav: NavController, public navParams: NavParams) {}
  home()
  {
  this.nav.setRoot(LimsAdminComponent);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferAdminPage');
  }

}
