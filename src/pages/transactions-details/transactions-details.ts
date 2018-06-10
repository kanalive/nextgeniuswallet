import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-transactions-details',
  templateUrl: 'transactions-details.html',
})
export class TransactionsDetailsPage {
  transfer : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log("view loaded");
    this.getTranferFromParam();
  }

  getTranferFromParam(){
    this.transfer = this.navParams.get('transferData');
    console.log(this.navParams.data);
  }


}
