import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the VotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vote',
  templateUrl: 'vote.html',
})
export class VotePage {
  witnesses:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getWitnesses();
  }


  // get accounts
  getWitnesses() {
    console.log("vote page function called");
    this.restProvider.getWitnesses()
    .then(data => {
      this.witnesses = data;
      console.log(this.witnesses);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VotePage');
  }

}
