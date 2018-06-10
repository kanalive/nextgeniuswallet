import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { SearchPipe } from '../../pipes/search/search';
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
  terms: string;
  pageLimit: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public searchPipe: SearchPipe) {
  }

  // get tokens
  getTokens(start) {
    console.log("token page function called");
    this.restProvider.getTokens(start).then(data => {
      console.log(data);
      this.tokens = data;
    });
    
  }
  ionViewDidLoad() {
    this.getTokens(0);
  }

  goTo(page, tokenName){
    console.log("go to page token detail - " + tokenName);
    this.navCtrl.push(page, {TokenName: tokenName});
  }
}
