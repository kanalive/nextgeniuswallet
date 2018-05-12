import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }
 doLogin(page) {
    this.navCtrl.setRoot(page);
  }

  // Call Forgot Password Modal
  presentModal(modalPage) {
    let modal = this.modalCtrl.create(modalPage);
    modal.present(); 
  }

}
