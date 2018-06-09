import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {
  transfer : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getTransfers();
  }
  items=[
    {date:'15-8-2017',cost:1000,address:'ATM Withdrawal 12 Street Name'},
    {date:'15-8-2017',cost:1000,address:'ATM Withdrawal 12 Street Name'},
    {date:'15-8-2017',cost:1000,address:'ATM Withdrawal 12 Street Name'},
    {date:'15-8-2017',cost:1000,address:'ATM Withdrawal 12 Street Name'},
  ]
  // goTo Function 
  goTo(page){
    this.navCtrl.push(page);
  }

  getTransfers(){
    this.restProvider.getTransfers(this.restProvider.account.address,0).then( data => {
      alert("success");
      console.log(data);
      this.transfer = data;
    });
  }
}
