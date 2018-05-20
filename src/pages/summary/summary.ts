import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Clipboard } from '@ionic-native/clipboard';
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
  tronPrice :any;
  totalNumOfTransactions: any;
  constructor(public navCtrl: NavController, private clipboard: Clipboard, public navParams: NavParams, public restProvider: RestProvider) {
    this.getBalance();
    this.getTotalNumOfTransactions();
    this.getTronPrice();
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
      this.accountBalance = data;
      console.log(data);
    });
  }

  getTotalNumOfTransactions(){
    this.restProvider.getNumOfTransactions()
    .then(data => {
      console.log(data);
    });
  }

  getTronPrice(){
    this.restProvider.getTronPrice()
    .then(data => {
      console.log(data);
      this.tronPrice = data;
    });
  }

  copy(text){
    this.clipboard.copy(text);

    this.clipboard.paste().then(
      (resolve: string) => {
          alert(resolve);
        },
        (reject: string) => {
          alert('Error: ' + reject);
        }
      );

  }

} 
   