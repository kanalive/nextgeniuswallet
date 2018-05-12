import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'https://jsonplaceholder.typicode.com';
  accountApiUrl = "https://91o3mlxvbb.execute-api.ap-southeast-2.amazonaws.com/Prod"

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  public getAccounts(){
    console.log("rest service called")
    return new Promise(resolve => {
      this.http.get(this.accountApiUrl+'/accounts').subscribe(data => {
        console.log(data);
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
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
