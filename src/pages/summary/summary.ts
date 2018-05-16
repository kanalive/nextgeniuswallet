import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
@IonicPage()
@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})
export class SummaryPage {
  balance=30;
  netWorth=70;
  deposits=70;
  accountBalance :any;
  totalNumOfTransactions: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getBalance();
    this.getTotalNumOfTransactions();
  }
 

  // goTo Function 
  goTo(page){
    this.navCtrl.setRoot(page);
  }
  // logOut Function 
  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }

  getBalance(){
    this.restProvider.getBalance()
    .then(data => {
      this.accountBalance = data["balances"];
      console.log(data);
    });
  }

  getTotalNumOfTransactions(){
    this.restProvider.getNumOfTransactions()
    .then(data => {
      console.log(data);
    });
  }

} 
   