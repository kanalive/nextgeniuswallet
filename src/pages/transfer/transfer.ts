import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-transfer',
  templateUrl: 'transfer.html',
})
export class TransferPage {
  fromAccount='account';
  toAccount='account';
   amount:number;
  show=false;
  result;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  // transform result
  showResult(){
    this.show=true;
    if(this.fromAccount != 'account'){
      if(this.toAccount != 'account'){
        if(this.amount==undefined){
          this.result='Please Enter Amount';
        }
        else{
          this.result='Transfer Successful';
        }
      }
      else{
        this.result='Please Select To Account';
      }
    }
    else{
      this.result='Please Select From Account';
    }
  }

  // logOut Function 
  logOut(){
    this.navCtrl.setRoot('WelcomePage');
  }

}  
