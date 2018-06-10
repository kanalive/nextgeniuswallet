import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {
  transfers : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    
  }

  ionViewDidLoad() {
    this.getTransfers();
  }

  // goTo Function 
  goTo(page, transfer){
    console.log(transfer);
    this.navCtrl.push(page), {transferData: "1"};
  }

  getTransfers(){
    this.restProvider.getTransfers(this.restProvider.account.address,0).then( data => {
      console.log(data);
      this.transfers = data;
    });
  }
}
