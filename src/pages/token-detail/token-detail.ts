import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-token-detail',
  templateUrl: 'token-detail.html',
})
export class TokenDetailPage {
  token : any;
  holders : any;
  percentage = 0;
  amount = 0;
  loading : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  }

  ionViewDidLoad() {
    let name = this.navParams.get('TokenName');
    this.token = this.restProvider.getCurrentToken();
    console.log(this.token);
    this.percentage = this.token.issuedPercentage;
    console.log(this.percentage);
    
    this.getTokenHolders(name);
  }
  // get token
  // getToken(name) {
  //   this.restProvider.getToken(name).then(data => {
  //     console.log(data);
  //     this.token = data;
  //   });
  // }

  buy(amount){
    this.presentPrompt(amount);
  }


  presentPrompt(amount) {
    let alertbox = this.alertCtrl.create({
      title: 'Buy',
      message: 'Are you sure you want to buy ' +amount +' of '+ this.token.name + '?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Confirm transaction',
          
          handler: data => {
            
            //let totalFrozenTrx = this.accountBalance.frozen.total/this.ONE_TRX;
            //console.log("Adding vote - " + voteCount + " to address " + item.address);
            
            //if(voteCount > totalFrozenTrx){
            //console.log("Insufficient fronzen account balance, "+ voteCount + " required, only " + totalFrozenTrx + "available.");
              
              //alert("Insufficient fronzen account balance, "+ voteCount + " required, only " + totalFrozenTrx + " available.");
            //}else{
              //let k = item.address;
              //var vote = {};
              //vote[k] = data["votes"];
              //console.log("Sending vote - " + voteCount + " to address " + item.address);
              this.loading.present();
              this.restProvider.participateAsset(this.restProvider.account.address, this.token.ownerAddress, this.token.name, amount).then(data => {
                //this.showConfirmAlert();
                if(data.code == "SUCCESS"){
                  this.loading.dismiss();
                  alert("Transaction Confirmed, successfully received" + amount + " of " + this.token.name);
                }
              });
            //}
          }
        }
      ]
    });
    alertbox.present();
  }

  getTokenHolders(name){
    this.restProvider.getTokenHolders(name).then(data => {
      console.log(data);
      this.holders = data;
    });
  }

}
