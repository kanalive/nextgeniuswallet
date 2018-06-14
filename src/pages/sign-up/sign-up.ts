import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  newAccountCreated = false;
  firstName = "";
  lastName = "";
  email = "";
  password = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

// set root page 
 doLogin(page) {
    this.navCtrl.setRoot(page);
  }

  createNewAccount(){
    if(this.password==""){
      alert("Invalid password.");
    }else{
      this.restProvider.createNewAccount(this.firstName, this.lastName, this.email, this.password);
      this.newAccountCreated = true;
    }
    
  }

} 
