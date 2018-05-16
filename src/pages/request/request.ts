import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import QRCode from 'qrcode';
import { Clipboard } from '@ionic-native/clipboard'
import { RestProvider } from '../../providers/rest/rest';
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
  
  qrcode : any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider, public navParams: NavParams, private barcodeScanner: BarcodeScanner, private clipboard: Clipboard) {

  }

 
  
  
  copyToClipboard(address){
    this.clipboard.copy(address);
  }

  process() {
    const qrcode = QRCode;
    const self = this;
    qrcode.toDataURL(this.restProvider.account.address, { errorCorrectionLevel: 'H' }, function (err, url) {
      this.qrcode = url;
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestPage');
  }

}
