import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public camera:Camera, public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController, public restProvider: RestProvider) {
    
  }
  // call address details modal
  callModal() {
    let modal = this.modalCtrl.create('UpdateProfilePage');
    modal.present();
  }

    // change Image
  base64Image='assets/img/kana.jpeg';

  accessGallery(){
   this.camera.getPicture({
     sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
     destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,'+imageData;
     }, (err) => {
      console.log(err);
    });
  }

  createNewAccount(){
    this.restProvider.createNewAccount();
  }

    // logOut Function
  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }

}
