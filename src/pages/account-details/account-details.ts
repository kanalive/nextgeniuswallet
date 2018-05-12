import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@IonicPage()
@Component({
  selector: 'page-account-details',
  templateUrl: 'account-details.html',
})
export class AccountDetailsPage {
  users:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider: RestProvider) {
    this.getUsers();
  }

  items=[
    {name:'Product Type', date:'Date Here'},
    {name:'Account Relationship', date:'Date Here'},
    {name:'Account Restrictions', date:'Date Here'},
    {name:'Account Branch', date:'Date Here'},
    {name:'Account status', date:'Date Here'},
    {name:'Uncleared of funds', date:'Date Here'},
    {name:'Amount on hold', date:'Date Here'},
    {name:'Overdraft limit', date:'Date Here'},
  ]
  // goTo Function 
  goTo(page){
    this.navCtrl.push(page);
  }

  getUsers() {
    console.log("account detail called");
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }


}
  