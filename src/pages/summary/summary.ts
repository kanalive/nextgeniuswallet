import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Clipboard } from '@ionic-native/clipboard';
import { AlertController } from 'ionic-angular';

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
  ONE_TRX = 1000000;
  constructor(public navCtrl: NavController, public alertCtrl:AlertController, public clipboard: Clipboard, public navParams: NavParams, public restProvider: RestProvider) {
    this.getAccount();
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

  getAccount(){
    this.restProvider.getAccountByAddress(null)
    .then(data => {
      this.accountBalance = data;
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

  }

  freeze(option) {

    let actionTitle = "Freeze"
    let actionText = "Frozen tokens are \"locked\" for a period of 3 days. During this period the frozen TRX cannot be traded.After this period you can unfreeze the TRX and trade the tokens.";
    
    let alert = this.alertCtrl.create({
      title: actionTitle,
      message: actionText,
      inputs: [
        {
          name: 'amount',
          placeholder: '0'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: actionTitle,
          handler: data => {
            console.log(actionTitle + " - " + data["amount"]);
            let freezeResult = this.restProvider.freezeBalance(this.restProvider.account.address, data["amount"], 3).then(data =>{
              console.log(data);
            });
          }
        }
      ]
    });
    alert.present();
  }

  unfreeze(option) {

    let actionTitle = "Unfreeze"
    
    let alert = this.alertCtrl.create({
      title: actionTitle,
      message: "Are you sure you want to unfreeze TRX?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: actionTitle,
          handler: data => {
            let unfreezeResult = this.restProvider.unfreezeBalance(this.restProvider.account.address).then(data =>{
              console.log(data);
            });
          }
        }
      ]
    });
    alert.present();
  }

  
} 
   