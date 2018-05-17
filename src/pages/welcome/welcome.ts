import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  address = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public loadingCtrl: LoadingController) {
    this.presentLoadingDefault();
    console.log("load");
  }

  // goTo Function 
  goTo(page){
    this.navCtrl.push(page);
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Loading account...'
    });
  
    loading.present();
    this.restProvider.loadAccountFromLocalSql()
    .then(data => {
      console.log(data);
      if(data != null){
        this.address = data["address"];
      }
      loading.dismiss();
      //this.goTo("SummaryPage");
    });
  }

}
