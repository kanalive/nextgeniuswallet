import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';

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
  myVotingList = [];

 


  constructor(public navCtrl: NavController,private alertCtrl: AlertController, public navParams: NavParams, public restProvider: RestProvider) {
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


  vote(item){
    let vote = {"address": item.address, "amount": 1}
    this.myVotingList.push(vote);
    console.log(this.myVotingList);
  }

  presentPrompt(item) {
    let alert = this.alertCtrl.create({
      title: 'Votes',
      inputs: [
        {
          name: 'votes',
          placeholder: '0'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Add',
          handler: data => {
            console.log("Add - " + data["votes"]);
            let vote = {"address": item.address, "amount": data["votes"]}
            this.myVotingList.push(vote);
          }
        }
      ]
    });
    alert.present();
  }

}
