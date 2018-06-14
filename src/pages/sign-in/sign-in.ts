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
  password = "";
  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }
 doLogin(page) {
   if(this.IsValidAddress()&&this.password!=""){
    this.restProvider.loginOtherAccount(this.firstName, this.lastName, this.email, this.privateKey, this.address, this.password)
    this.navCtrl.setRoot(page);
   }else{
    alert("Please enter valid address and password.")
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
