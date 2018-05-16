import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QRCode } from 'qrcode';
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
  
  code = 'some sample string';
  generated = '';

  displayQrCode() {
    return this.generated !== '';
  }

  constructor(public navCtrl: NavController, public restProvider: RestProvider, public navParams: NavParams, private barcodeScanner: BarcodeScanner, private clipboard: Clipboard) {
    this.code = this.restProvider.account.address;
  }

 
  
  
  copyToClipboard(address){
    this.clipboard.copy(address).then((data) => {
      console.log(data);
     }, (err) => {
      console.log(err);
    });
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
