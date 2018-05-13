import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import QRCode from 'qrcode';
import { Clipboard } from '@ionic-native/clipboard'

/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {
  code = 'abcdefghijklmnopqrstuvxyzabcdefghijklmnopqrstuvxyz';
  generated = '';
  accountAlias = '';

  accounts = [];

  displayQrCode() {
    return this.generated !== '';
  }

  createAccount(){
    let account = { alias : this.accountAlias, address : this.code.split('').sort(function(){return 0.5-Math.random()}).join(''), displayqr: false};
    this.accounts.push(account);
  }

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, private clipboard: Clipboard) {
    this.createAccount();
  }

  
  copyToClipboard(address){
    this.clipboard.copy(address);
  }

  process(account) {
    const qrcode = QRCode;
    const self = this;
    qrcode.toDataURL(account.address, { errorCorrectionLevel: 'H' }, function (err, url) {
      account.qrcode = url;
      account.displayqr = true;
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestPage');
  }

}
