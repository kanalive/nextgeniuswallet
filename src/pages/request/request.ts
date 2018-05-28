import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QRCode } from 'qrcode';
import { Clipboard } from '@ionic-native/clipboard';
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

  constructor(public navCtrl: NavController, public restProvider: RestProvider, public navParams: NavParams, private barcodeScanner: BarcodeScanner, public clipboard: Clipboard) {
    this.code = this.restProvider.account.address;
  }

 
  
  
  copy(text){
    this.clipboard.copy(text).then(data => {
      alert("copied " + data);
    });
  }

  process() {
    const qrcode = QRCode;
    console.log(qrcode);
    const self = this;
    qrcode.toDataURL(self.code, { errorCorrectionLevel: 'H' }, function (err, url) {
      self.generated = url;
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestPage');
  }

}
