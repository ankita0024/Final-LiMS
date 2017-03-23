import { LimsAdminComponent } from './../../app/lims-admin/lims-admin.component';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the List page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  constructor(public navParams: NavParams, public nav: NavController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }
 home()
  {
    this.nav.setRoot(LimsAdminComponent);

  }
}
