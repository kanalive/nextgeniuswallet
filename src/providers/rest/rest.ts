import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Client} from "../services/api";
import { Storage } from '@ionic/storage';
import { generateAccount } from "@tronprotocol/wallet-api/src/utils/account";
import { privateKeyToAddress } from "@tronprotocol/wallet-api/src/utils/crypto";
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
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

  public loginOtherAccount(firstName, lastName, email, privateKey, address){
    this.account.firstName = firstName;
    this.account.lastName = lastName;
    this.account.email = email;
    this.account.privateKey = privateKey;
    this.account.address = address;
    this.storage.set('account', this.account);
  }

  public createNewAccount(firstName, lastName, email){
    this.account = generateAccount();
    this.account.firstName = firstName;
    this.account.lastName = lastName;
    this.account.email = email;
    this.storage.set('account', this.account);
  }

  public getAddressFromPrivateKey(prikey){
    let addr = privateKeyToAddress(prikey);
    console.log(addr)
    this.account = {address: addr, privatekey: prikey}
    this.storage.set('account', this.account);

    return addr;
    
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

  public transfer(to, amount){
    console.log(this.account.privateKey);
    return new Promise(resolve => {
      this.send(this.account.privateKey, "TRX", to, amount).then(data => {
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

  public getAccountKey(){
    console.log("client - getAccountKey")
    return Client.getAccountKey()
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

  private send(prikey, token, to, amount){
    console.log("transfer " + amount + token + " to " + to);
    return Client.send(prikey, token, to, amount);
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



}
