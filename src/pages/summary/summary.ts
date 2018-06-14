import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController, LoadingController} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Clipboard } from '@ionic-native/clipboard';
import { AlertController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})
export class SummaryPage {
  balance=30;
  netWorth=70;
  deposits=70;
  fronzenNetWorth=0;
  accountBalance :any;
  tronPrice :any;
  totalBalance:any;
  totalNumOfTransactions: any;
  ONE_TRX = 1000000;
  price_btc = 0;
  price_usd = 0;
  loading : any;
  constructor(public navCtrl: NavController,public camera:Camera, public modalCtrl: ModalController, public alertCtrl:AlertController, public clipboard: Clipboard, public navParams: NavParams, public restProvider: RestProvider, public loadingCtrl: LoadingController) {
    
  }


  ionViewDidLoad() {
    this.getAccount();
    this.getTronPrice();
    if(this.restProvider.account.profileImage!= null){
      this.base64Image = 'data:image/jpeg;base64,'+this.restProvider.account.profileImage;
    }
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  }
 
  callModal() {
    let modal = this.modalCtrl.create('UpdateProfilePage');
    modal.present();
  }

    // change Image
  base64Image='assets/img/default-profile.png';

  accessGallery(){
    console.log("get picture from gallery")
   this.camera.getPicture({
     sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
     destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,'+imageData;
      this.restProvider.saveProfileImageintoLocalStorage(this.base64Image);
     }, (err) => {
      console.log(err);
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

  getAccount(){
    this.restProvider.getAccountByAddress(null)
    .then(data => {
      this.accountBalance = data;
      console.log(data);
      let balance = this.accountBalance.balance / this.ONE_TRX;
      let fronzenBalance = (this.accountBalance.frozen.total/this.ONE_TRX);
      let total = balance + fronzenBalance;
      if(total <= 0){
        total = 1;
      }

      this.netWorth = balance / total * 100;
      this.fronzenNetWorth = fronzenBalance / total * 100;
      this.totalBalance = total;

    });
  }



  getTronPrice(){
    this.restProvider.getTronPrice()
    .then(data => {

      this.tronPrice = data;
      if(this.tronPrice.length>0){
        this.price_btc = this.tronPrice[0].price_btc;
        this.price_usd = this.tronPrice[0].price_usd;
      }
    });
  }

  copy(text){
    this.clipboard.copy(text).then(data=>{
      alert("Copied to clipboard");
     }) ;

  }

  freeze(option) {

    let actionTitle = "Freeze"
    let actionText = "Frozen tokens are \"locked\" for a period of 3 days. During this period the frozen TRX cannot be traded.After this period you can unfreeze the TRX and trade the tokens.";
    
    let alertbox = this.alertCtrl.create({
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
            //console.log('Cancel clicked');
          }
        },
        {
          text: actionTitle,
          handler: data => {
            this.loading.present();
            let freezeResult = this.restProvider.freezeBalance(this.restProvider.account.address, data["amount"], 3).then(data =>{
              if(data.code == "SUCCESS"){
                this.loading.dismiss();
                alert("Freeze TRX successfully completed.");
              }
            });
          }
        }
      ]
    });
    alertbox.present();
  }

  unfreeze(option) {

    let actionTitle = "Unfreeze"
    let now = new Date().getTime();
    if(this.accountBalance.frozen.balances.len>0 && this.accountBalance.frozen.balances[0].expires < now){
      let alertbox = this.alertCtrl.create({
        title: actionTitle,
        message: "Are you sure you want to unfreeze TRX?",
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              
            }
          },
          {
            text: actionTitle,
            handler: data => {
              this.loading.present();
              let unfreezeResult = this.restProvider.unfreezeBalance(this.restProvider.account.address).then(data =>{
                alert("Unfreeze TRX successfully completed.");
                this.loading.dismiss();
              });
            }
          }
        ]
      });
      alertbox.present();
    }else{
      alert("Cannot unfreeze token, please only unfreeze tokens after frozen term expired.");
    }
  }


  
} 
   