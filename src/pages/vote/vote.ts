import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from '../../providers/pipe/filterPipe';
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

  searchToken: string;




  constructor(public navCtrl: NavController,private filterPipe: FilterPipe, private alertCtrl: AlertController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getWitnesses();
  }


  // goTo Function
  goTo(page){
    this.navCtrl.setRoot(page);
  }
  // logOut Function
  logOut(){
    this.navCtrl.setRoot('WelcomePage');
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
          text: 'Submit vote',
          handler: data => {
            console.log("Add - " + data["votes"]);
            let votes = [{"address": item.address, "amount": data["votes"]}];
            // let myAccount = {"address": "27c94Yy78VCJVvChYBpjUWSzGCd9TKQnqb", "noteList": vote}
            // TODO Need to get Account Key
            this.restProvider.postVote(this.restProvider.account.address, votes);
          }
        }
      ]
    });
    alert.present();
  }

}
