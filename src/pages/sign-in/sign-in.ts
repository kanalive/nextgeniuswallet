import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  privateKey = '';
  address: any;
  firstName = "";
  lastName = "";
  email = "";
  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }
 doLogin(page) {
   if(this.IsValidAddress()){
    this.restProvider.loginOtherAccount(this.firstName, this.lastName, this.email, this.privateKey, this.address)
    this.navCtrl.setRoot(page);
   }
  }

  // Call Forgot Password Modal
  presentModal(modalPage) {
    let modal = this.modalCtrl.create(modalPage);
    modal.present(); 
  }

  getAddress(){
    if(this.privateKey != ''){
      this.address = this.restProvider.getAddressFromPrivateKey(this.privateKey);
    }
  }

  IsValidAddress(){
    if(this.address != null) return true;
    else return false;
  }

}
