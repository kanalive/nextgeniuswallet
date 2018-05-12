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

  displayQrCode() {
    return this.generated !== '';
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, private clipboard: Clipboard) {
  }

  copyToClipboard(){
    this.clipboard.copy(this.code);
  }

  process() {
    const qrcode = QRCode;
    const self = this;
    qrcode.toDataURL(self.code, { errorCorrectionLevel: 'H' }, function (err, url) {
      self.generated = url;
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestPage');
  }

}
