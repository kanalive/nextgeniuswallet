import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Client} from "../services/api";
import { Storage } from '@ionic/storage';
import { generateAccount } from "@tronprotocol/wallet-api/src/utils/account";
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'https://jsonplaceholder.typicode.com';
  // accountApiUrl = "https://91o3mlxvbb.execute-api.ap-southeast-2.amazonaws.com/Prod"
  public account : any;

  constructor(public http: HttpClient, private storage: Storage ) {
    console.log('Hello RestProvider Provider');
  }



  public loadAccountFromLocalSql(){
    return new Promise(resolve => {
      this.storage.get('account').then((val) => {
        console.log('account');
        console.log(val);
        resolve(val);
        this.account = val;
      });
    });
  }

  public createNewAccount(){
    this.account = generateAccount();
    this.storage.set('account', this.account);

  }




  public getTronPrice(){
    return new Promise(resolve => {
      this.http.get(`https://api.coinmarketcap.com/v1/ticker/tronix/`).subscribe(data => {
        console.log(data);
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public getBalance(){
    return new Promise(resolve => {
      this.getAccountBalances(this.account.address).then(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public getNumOfTransactions(){
    return new Promise(resolve => {
      this.getTotalNumberOfTransactions().then(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }



  public getAccounts(){
    console.log("rest service called - getAccounts")
    return Client.getAccountList();
  }

  private getAccountBalances(address){
    console.log("rest service called - getAccountBalances")
    return Client.getAccountBalances(address);
  }

  public getLatestBlock(){
    console.log("rest service called - getLatestBlock")
    return Client.getLatestBlock();
  }

  public getNodes(){
    console.log("rest service called - getNodes")
    return Client.getNodes();
  }

  public getWitnesses(){
    console.log("rest service called - getWitnesses")
    return Client.getWitnesses();
  }

  private getTotalNumberOfTransactions(){
    console.log("rest service called - getTotalNumberOfTransactions")
    return Client.getTotalNumberOfTransactions();
  }



  public postVote(accountKey, myVotes){
    // return this.http.post(this.accountApiUrl+'/voteforwitnesses', myVote, {})
    // .subscribe(data => console.log(data));

    let witnessVotes = myVotes.map(vote => ({
      address: vote.address,
      amount: parseInt(vote.amount, 10)
    })).filter(vote => vote.amount > 0);

    return Client.voteForWitnesses(accountKey, witnessVotes);
  }


  public getUsers() {
    console.log("rest service called")
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/users').subscribe(data => {
        console.log(data);
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/users', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
