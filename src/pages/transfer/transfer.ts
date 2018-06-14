import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AlertController } from 'ionic-angular';
import { NgxQRCodeModule } from 'ngx-qrcode2';
@IonicPage()
@Component({
  selector: 'page-transfer',
  templateUrl: 'transfer.html',
})
export class TransferPage {
  //for hot wallet
  latestBlock : any;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private barcodeScanner: BarcodeScanner, public navParams: NavParams, public restProvider: RestProvider,public loadingCtrl: LoadingController) {
    
  }

  fromAccount=this.restProvider.account.address;
  toAccount='';
  amount:number;
  show=false;
  result;
  accountBalance: any;
  busy = false;
  availableFund =0;
  ONE_TRX = 1000000;

  qrData = null;
  createdCode = null;
  scannedCode = null;

  loading :any;

  ionViewDidLoad() {
    this.getAccountByAddress();
    this.loading = this.loadingCtrl.create({
      content: 'Loading account...'
    });
  
    
  }

  getAccountByAddress(){
    console.log("getbalance in transfer page called");
    this.restProvider.getAccountByAddress(this.fromAccount)
    .then(data => {
      console.log(this.accountBalance);
      this.accountBalance = data;

      this.availableFund = (data.balance)/this.ONE_TRX;
      
      console.log(data);
    });
  }

  transfer(){
    console.log("transfer in transfer page called");
    this.busy = true;
    if(this.amount > this.availableFund){
      alert("Insufficient account balance, transfer cancelled.");
    }else{
      this.restProvider.send("TRX", this.toAccount, this.amount)
      .then(data => {
        console.log(data);
        if(data.success){
          this.showConfirmAlert();
          this.busy = false;
          this.getAccountByAddress();
        }else{
          alert(data.message);
        }
      })
    }
    
  }

  showConfirmAlert() {
    let alert = this.alertCtrl.create({
        title: 'Transfer successful',
        buttons: [
            {
                text: 'Ok',
                handler: () => {
                }
            }
        ]
    });
    alert.present();
  }
  



  // logOut Function 
  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }

  sendTransactionHexData(transactionHex){
    this.restProvider.sendTransactionHex(transactionHex).then(data => {
      console.log(data);
      this.loading.dismiss();
      alert(data);
      
    });
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      let hex = JSON.parse(this.scannedCode);
      this.sendTransactionHexData(hex);
      this.loading.present();
    }, (err) => {
        console.log('Error: ', err);
    });
  }

  getLatestBlock(){
    this.restProvider.getLatestBlock().then(data =>{
      console.log(data);
      this.latestBlock = JSON.stringify(data);
      this.createCode(this.latestBlock);
    });
    
  }

  createCode(data) {
    this.createdCode = data;
  }

}  
