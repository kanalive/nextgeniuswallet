import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the TokensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tokens',
  templateUrl: 'tokens.html',
})
export class TokensPage {
  tokens: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getTokens();
  }

  // get accounts
  getTokens() {
    console.log("token page function called");
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TokensPage');
  }

}
