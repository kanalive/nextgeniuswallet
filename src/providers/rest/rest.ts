import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from "@tronscan/client";
import { Storage } from '@ionic/storage';
import { generateAccount } from "@tronscan/client/src/utils/account";
import { pkToAddress } from "@tronscan/client/src/utils/crypto";
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  // accountApiUrl = "https://91o3mlxvbb.execute-api.ap-southeast-2.amazonaws.com/Prod"
  public account : any;
  private ONE_TRX = 1000000;

  constructor(public http: HttpClient, private storage: Storage, private client: Client ) {
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
    this.account.profileImage = null;
    this.storage.set('account', this.account);
  }

  public createNewAccount(firstName, lastName, email){
    this.account = generateAccount();
    this.account.firstName = firstName;
    this.account.lastName = lastName;
    this.account.email = email;
    this.account.profileImage = null;
    this.storage.set('account', this.account);
  }

  public saveProfileImageintoLocalStorage(base64Image){
    this.account.profileImage = base64Image;
    this.storage.set('account', this.account);
  }

  public getAddressFromPrivateKey(privateKey){
    console.log("getAddressFromPrivateKey");
    let addr = pkToAddress(privateKey);
    
    console.log(addr)
    this.account = {address: addr, privatekey: privateKey}
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



  public getTransfers(address, start){
    console.log("rest service called - getTransfers")
    if(!address){
      address = this.account.address;
    }
    if(!start){
      start = 0;
    }
    let options = {address: address, start: start};
    return this.client.getTransfers(options);
  }



  public getAccountByAddress(address){
    console.log("rest service called - getAccountByAddress")
    if(!address){
      address = this.account.address;
    }
    return this.client.getAccountByAddress(address);
  }

  public getTokens(start){
    console.log("rest service called - getTokens");
    let options = {start: start};
    return this.client.getTokens(options);
  }

  public getToken(name){
    console.log("rest service called - getToken");
    return this.client.getToken(name);
  }

  public getTokenHolders(name){
    console.log("rest service called - getTokenHolders");
    return this.client.getTokenHolders(name);
  }

  public getWitnesses(){
    console.log("rest service called - getWitnesses")
    return this.client.getWitnesses();
  }


  async send(token, to, amount){
    let pk = this.account.privateKey;    
    console.log("transfer " + amount + token + " to " + to);
    return await this.client.send(token, this.account.address, to, amount*this.ONE_TRX)(pk);
  }


  async freezeBalance(address, amount, duration){
    let pk = this.account.privateKey;
    return await this.client.freezeBalance(address, amount*this.ONE_TRX, duration)(pk);
  }

  async unfreezeBalance(address){
    let pk = this.account.privateKey;
    return await this.client.unfreezeBalance(address)(pk);
  }
 

  async postVote(myVotes){

    let pk = this.account.privateKey;    
    return await this.client.voteForWitnesses(this.account.address, myVotes)(pk);
  }



}
