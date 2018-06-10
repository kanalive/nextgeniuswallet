import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the VotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vote',
  templateUrl: 'vote.html',
})

export class VotePage {

  witnesses:any;
  terms: string;
  accountBalance: any;
  ONE_TRX=1000000;
  busy = false;
  loading : any;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, public restProvider: RestProvider, private loadingCtrl: LoadingController) {
    
  }

  ionViewDidLoad() {
    this.getWitnesses();
    this.getAccount();
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  }


  // goTo Function
  goTo(page){
    this.navCtrl.setRoot(page);
  }
  // logOut Function
  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }


  // get accounts
  getWitnesses() {
    console.log("vote page function called");
    this.restProvider.getWitnesses()
    .then(data => {
      this.witnesses = data.witnesses;
      console.log(this.witnesses);
    });
  }

  getAccount(){
    this.restProvider.getAccountByAddress(null)
    .then(data => {
      this.accountBalance = data;
      console.log(data);
    });
  }

  presentPrompt(item) {
    let alertbox = this.alertCtrl.create({
      title: 'Votes',
      inputs: [
        {
          name: 'votes',
          placeholder: '0'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit vote',
          handler: data => {
            //console.log("Submiting vote");
            
            let voteCount = data["votes"];
            let totalFrozenTrx = this.accountBalance.frozen.total/this.ONE_TRX;
            //console.log("Adding vote - " + voteCount + " to address " + item.address);
            
            if(voteCount > totalFrozenTrx){
            //console.log("Insufficient fronzen account balance, "+ voteCount + " required, only " + totalFrozenTrx + "available.");
              
              alert("Insufficient fronzen account balance, "+ voteCount + " required, only " + totalFrozenTrx + " available.");
            }else{
              let k = item.address;
              var vote = {};
              vote[k] = data["votes"];
              //console.log("Sending vote - " + voteCount + " to address " + item.address);
              this.loading.present();
              this.restProvider.postVote(vote).then(data => {
                //this.showConfirmAlert();
                if(data.code == "SUCCESS"){
                  this.loading.dismiss();
                  alert("Your votes are successfully submitted, they will take effect when the next voting cycle starts. You may redistribute your votes anytime you like");
                }
              });
            }
          }
        }
      ]
    });
    alertbox.present();
  }

  showConfirmAlert() {
    console.log("show confirmation");
    let alert = this.alertCtrl.create({
        title: 'Voting completed',
        message: 'Voting completed',
        buttons: [
            {
                text: 'Yes',
                handler: () => {

                }
            }
        ]
    });
    alert.present();
  }

}
