import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import QRCode from 'qrcode';
import { Clipboard } from '@ionic-native/clipboard';
import { RestProvider } from '../../providers/rest/rest';
import { NgxQRCodeModule } from 'ngx-qrcode2';
/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transfer2',
  templateUrl: 'transfer2.html',
})
export class Transfer2Page {
  
  code = 'some sample string';
  generated = '';
  latestBlock = '';

  //for cold wallets
  toAccount : '';
  amount: 0;
  token : "TRX";
  
  qrData = null;
  createdCode = null;
  scannedCode = null;

  displayQrCode() {
    return this.generated !== '';
  }

  constructor(public navCtrl: NavController, public restProvider: RestProvider, public navParams: NavParams, private barcodeScanner: BarcodeScanner, public clipboard: Clipboard) {
    //this.code = this.restProvider.account.address;
  }


 
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
        console.log('Error: ', err);
    });
  }
  
  copy(text){
    this.clipboard.copy(text).then(data => {
      alert("copied " + data);
    });
  }

  // process() {
  //   const qrcode = QRCode;
  //   const self = this;
  //   qrcode.toDataURL(self.code, { errorCorrectionLevel: 'H' }, function (err, url) {
  //     self.generated = url;
  //   })
  // }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestPage');
  }



  signTransactionLocally(){

    let latestBlockObj = JSON.parse(this.scannedCode);
    this.restProvider.offlineSignSendTransaction("TRX", this.toAccount, this.amount, latestBlockObj).then( data=>{
      this.qrData = data;
      console.log(this.qrData);
      alert("Sign transaction completed, please generate a QR code, use a hot wallet to scan this QR code to sync transaction to server.");
    })
  }

  createCode() {
    this.createdCode = JSON.parse(this.qrData);
  }


  
}
