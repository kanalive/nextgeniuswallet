import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-token-detail',
  templateUrl: 'token-detail.html',
})
export class TokenDetailPage {
  token : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    
  }

  ionViewDidLoad() {
    this.getToken(this.navParams.get('TokenName'));
  }
  // get token
  getToken(name) {
    this.restProvider.getToken(name).then(data => {
      console.log(data);
      this.token = data;
    });
    
  }

}
