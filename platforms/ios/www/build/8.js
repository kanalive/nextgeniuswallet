webpackJsonp([8],{

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenDetailPageModule", function() { return TokenDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__token_detail__ = __webpack_require__(438);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TokenDetailPageModule = /** @class */ (function () {
    function TokenDetailPageModule() {
    }
    TokenDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__token_detail__["a" /* TokenDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__token_detail__["a" /* TokenDetailPage */]),
            ],
        })
    ], TokenDetailPageModule);
    return TokenDetailPageModule;
}());

//# sourceMappingURL=token-detail.module.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TokenDetailPage = /** @class */ (function () {
    function TokenDetailPage(navCtrl, navParams, restProvider, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.percentage = 0;
        this.amount = 0;
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
    }
    TokenDetailPage.prototype.ionViewDidLoad = function () {
        var name = this.navParams.get('TokenName');
        this.token = this.restProvider.getCurrentToken();
        console.log(this.token);
        this.percentage = this.token.issuedPercentage;
        console.log(this.percentage);
        this.getTokenHolders(name);
    };
    // get token
    // getToken(name) {
    //   this.restProvider.getToken(name).then(data => {
    //     console.log(data);
    //     this.token = data;
    //   });
    // }
    TokenDetailPage.prototype.buy = function (amount) {
        this.presentPrompt(amount);
    };
    TokenDetailPage.prototype.presentPrompt = function (amount) {
        var _this = this;
        var alertbox = this.alertCtrl.create({
            title: 'Buy',
            message: 'Are you sure you want to buy ' + amount + ' of ' + this.token.name + '?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Confirm transaction',
                    handler: function (data) {
                        //let totalFrozenTrx = this.accountBalance.frozen.total/this.ONE_TRX;
                        //console.log("Adding vote - " + voteCount + " to address " + item.address);
                        //if(voteCount > totalFrozenTrx){
                        //console.log("Insufficient fronzen account balance, "+ voteCount + " required, only " + totalFrozenTrx + "available.");
                        //alert("Insufficient fronzen account balance, "+ voteCount + " required, only " + totalFrozenTrx + " available.");
                        //}else{
                        //let k = item.address;
                        //var vote = {};
                        //vote[k] = data["votes"];
                        //console.log("Sending vote - " + voteCount + " to address " + item.address);
                        _this.loading.present();
                        _this.restProvider.participateAsset(_this.restProvider.account.address, _this.token.ownerAddress, _this.token.name, amount).then(function (data) {
                            //this.showConfirmAlert();
                            if (data.code == "SUCCESS") {
                                _this.loading.dismiss();
                                alert("Transaction Confirmed, successfully received" + amount + " of " + _this.token.name);
                            }
                        });
                        //}
                    }
                }
            ]
        });
        alertbox.present();
    };
    TokenDetailPage.prototype.getTokenHolders = function (name) {
        var _this = this;
        this.restProvider.getTokenHolders(name).then(function (data) {
            console.log(data);
            _this.holders = data;
        });
    };
    TokenDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-token-detail',template:/*ion-inline-start:"/Users/wli3/Projects/nextgeniuswallet/src/pages/token-detail/token-detail.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-buttons start >\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="ios-menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>Token details</ion-title>\n      <ion-buttons end >\n        <button ion-button icon-only (click)="logOut()">\n          <ion-icon name="ios-log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n  \n    <ion-list *ngIf="token"  class="graphs">\n  \n      <ion-item>\n          <p>Token - {{token.name}}</p>\n          <span>{{token.description}}</span>\n          <hr />\n          <div class="container">\n              <p>\n                <span>Website</span>\n                <span>{{token.url}}</span>\n              </p>\n          </div>\n          \n          <div class="container">\n              <p>\n                  <span>Total supply</span>\n                  <span>{{token.totalSupply}}</span>\n                </p>\n          </div>\n          \n  \n          <div class="container">\n              <p>\n                <span>Issuer</span>\n                <span>{{token.ownerAddress}}</span>\n              </p>\n          </div>\n\n          <div class="container">\n              <p>\n                <span>Date created</span>\n                <span>{{token.dateCreated| date:\'yyyy-MM-dd HH:mm a z\':\'+0800\'}}</span>\n              </p>\n          </div>\n\n          <div class="container">\n              <p>\n                <span>Start date</span>\n                <span>{{token.startTime| date:\'yyyy-MM-dd HH:mm a z\':\'+0800\'}}</span>\n              </p>\n          </div>\n\n          <div class="container">\n              <p>\n                <span>End date</span>\n                <span>{{token.endTime| date:\'yyyy-MM-dd HH:mm a z\':\'+0800\'}}</span>\n              </p>\n          </div>\n\n          <div class="container">\n              <p>\n                <span>Price</span>\n                <span>{{token.price/1000000}}</span>\n              </p>\n          </div>\n\n        </ion-item>\n\n          <ion-item>\n              <p>Issued / remaining supply</p>\n              <div class="container">\n                <ion-item>\n                  <ion-range [(ngModel)]="percentage"  ></ion-range> \n                </ion-item>\n                  <p>\n                      <span>{{token.issued}} / </span>\n                      <span>{{token.remaining}}</span>\n                  </p>\n              </div>  \n            </ion-item>\n            \n            <ion-card>\n              <ion-card-header>Enter amount below to buy</ion-card-header>\n              <ion-card-content>\n                  <ion-input [(ngModel)]="amount"></ion-input>\n                  <button block ion-button color="color2" (click)="buy(amount);">Buy</button>\n              </ion-card-content>\n            </ion-card>\n    </ion-list>\n  \n    <ion-list *ngIf="holders">\n        <p>Token holders - {{holders.total}} in total</p>\n        <ion-item *ngFor="let data of holders.addresses">\n            \n            <div class="container">\n                <p>\n                  <span>{{data.address}} | quantity : </span> \n                  <span>{{data.balance}}</span> \n                </p>\n            </div>\n          </ion-item>\n\n    </ion-list>  \n\n  </ion-content>\n  '/*ion-inline-end:"/Users/wli3/Projects/nextgeniuswallet/src/pages/token-detail/token-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TokenDetailPage);
    return TokenDetailPage;
}());

//# sourceMappingURL=token-detail.js.map

/***/ })

});
//# sourceMappingURL=8.js.map