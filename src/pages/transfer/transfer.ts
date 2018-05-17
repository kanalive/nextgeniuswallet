import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-transfer',
  templateUrl: 'transfer.html',
})
export class TransferPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private qrScanner: QRScanner, public navParams: NavParams, public restProvider: RestProvider) {
    this.getBalance();
  }

  fromAccount=this.restProvider.account.address;
  toAccount='';
  amount:number;
  show=false;
  result;
  accountBalance: any;

  getBalance(){
    console.log("getbalance in transfer page called");
    this.restProvider.getBalance()
    .then(data => {
      this.accountBalance = data["balances"];
      console.log(this.accountBalance);
    });
  }

  transfer(){
    console.log("transfer in transfer page called");
    this.restProvider.transfer(this.toAccount, this.amount)
    .then(data => {
      if(data==true){
        this.showConfirmAlert();
      }
    })
  }

  showConfirmAlert() {
    console.log("show confirmation");
    let alert = this.alertCtrl.create({
        title: 'Transfer success',
        message: 'Transfer success',
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
  
  scan(){
    // Optionally request the permission early
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {
        // camera permission was granted


        // start scanning
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          console.log('Scanned something', text);
          this.toAccount = text;
          this.qrScanner.hide(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning
        });

      } else if (status.denied) {
        console.log('camera permission was permanently denied');
        
        // camera permission was permanently denied
        // you must use QRScanner.openSettings() method to guide the user to the settings page
        // then they can grant the permission from there
      } else {
        // permission was denied, but not permanently. You can ask for permission again at a later time.
        console.log('permission was denied, but not permanently');
      }
    })
    .catch((e: any) => console.log('Error is', e));
  }


  // logOut Function 
  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }

}  
