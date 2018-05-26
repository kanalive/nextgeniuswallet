import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@IonicPage()
@Component({
  selector: 'page-personal-account',
  templateUrl: 'personal-account.html',
})
export class PersonalAccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getAccounts();
  }

  accounts: any;
  // get accounts
  getAccounts() {
    console.log("personal account page function called");
    this.restProvider.getAccountByAddress(null)
    .then(data => {
      this.accounts = data;
      console.log(this.accounts);
    });
  }

  // goTo Function 
  goTo(page){
    this.navCtrl.push(page);
  } 

    // logOut Function 
  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }
}
