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
  holders : any;
  percentage = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    
  }

  ionViewDidLoad() {
    let name = this.navParams.get('TokenName');
    this.token = this.restProvider.getCurrentToken();
    console.log(this.token);
    this.percentage = this.token.issuedPercentage;
    console.log(this.percentage);
    
    this.getTokenHolders(name);
  }
  // get token
  // getToken(name) {
  //   this.restProvider.getToken(name).then(data => {
  //     console.log(data);
  //     this.token = data;
  //   });
  // }

  getTokenHolders(name){
    this.restProvider.getTokenHolders(name).then(data => {
      console.log(data);
      this.holders = data;
    });
  }

}
