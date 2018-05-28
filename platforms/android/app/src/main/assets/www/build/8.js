webpackJsonp([8],{

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageModule", function() { return SummaryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__summary__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SummaryPageModule = /** @class */ (function () {
    function SummaryPageModule() {
    }
    SummaryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__summary__["a" /* SummaryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__summary__["a" /* SummaryPage */]),
            ],
        })
    ], SummaryPageModule);
    return SummaryPageModule;
}());

//# sourceMappingURL=summary.module.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SummaryPage = /** @class */ (function () {
    function SummaryPage(navCtrl, alertCtrl, clipboard, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.clipboard = clipboard;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.balance = 30;
        this.netWorth = 70;
        this.deposits = 70;
        this.ONE_TRX = 1000000;
        this.getAccount();
        this.getTronPrice();
    }
    // goTo Function 
    SummaryPage.prototype.goTo = function (page) {
        this.navCtrl.setRoot(page);
    };
    // logOut Function 
    SummaryPage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    SummaryPage.prototype.getAccount = function () {
        var _this = this;
        this.restProvider.getAccountByAddress(null)
            .then(function (data) {
            _this.accountBalance = data;
            console.log(data);
        });
    };
    SummaryPage.prototype.getTronPrice = function () {
        var _this = this;
        this.restProvider.getTronPrice()
            .then(function (data) {
            console.log(data);
            _this.tronPrice = data;
        });
    };
    SummaryPage.prototype.copy = function (text) {
        this.clipboard.copy(text);
        this.clipboard.paste().then(function (resolve) {
            alert(resolve);
        }, function (reject) {
            alert('Error: ' + reject);
        });
    };
    SummaryPage.prototype.freeze = function (option) {
        var _this = this;
        var actionTitle = "Freeze";
        var actionText = "Frozen tokens are \"locked\" for a period of 3 days. During this period the frozen TRX cannot be traded.After this period you can unfreeze the TRX and trade the tokens.";
        var alert = this.alertCtrl.create({
            title: actionTitle,
            message: actionText,
            inputs: [
                {
                    name: 'amount',
                    placeholder: '0'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: actionTitle,
                    handler: function (data) {
                        console.log(actionTitle + " - " + data["amount"]);
                        var freezeResult = _this.restProvider.freezeBalance(_this.restProvider.account.address, data["amount"], 3).then(function (data) {
                            console.log(data);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    SummaryPage.prototype.unfreeze = function (option) {
        var _this = this;
        var actionTitle = "Unfreeze";
        var alert = this.alertCtrl.create({
            title: actionTitle,
            message: "Are you sure you want to unfreeze TRX?",
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: actionTitle,
                    handler: function (data) {
                        var unfreezeResult = _this.restProvider.unfreezeBalance(_this.restProvider.account.address).then(function (data) {
                            console.log(data);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    SummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-summary',template:/*ion-inline-start:"/Users/wli3/Projects/nextgeniuswallet/src/pages/summary/summary.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Summary</ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<script>\n  if (typeof console  != "undefined") \n    if (typeof console.log != \'undefined\')\n        console.olog = console.log;\n    else\n        console.olog = function() {};\n\nconsole.log = function(message) {\n    console.olog(message);\n    $(\'#debugDiv\').append(\'<p>\' + message + \'</p>\');\n};\nconsole.error = console.debug = console.info =  console.log\n</script>\n<ion-content padding>\n<div id="debugDiv"></div>\n  <!-- balance and login information  -->\n  <ion-grid class="blanceGrid">\n    <ion-row>\n      <ion-col col-auto>\n        <div class="avatarContent">\n          <img src="assets/img/kana.jpeg"/>\n          <div>\n            \n          </div>\n        </div>\n      </ion-col>\n      <ion-col col>\n        <div class="loginInfo">\n          <h5>Welcome</h5>\n          <h4>{{restProvider.account.firstName}} {{restProvider.account.lastName}}</h4>\n          <span>{{restProvider.account.email}}</span>\n          \n\n          \n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- graphs container -->\n  <ion-list class="graphs" *ngIf="restProvider.account">\n    <ion-list-header>\n      Click on the graphs to view more details\n    </ion-list-header>\n\n    <ion-item>\n        <p>Account</p>\n        <div class="container">\n            <p>\n              <span>Address</span>\n              <span>{{restProvider.account.address}}</span>\n            </p>\n        </div>\n        \n        <div class="container">\n            <p>\n                <span>Private key</span>\n                <span>{{restProvider.account.privateKey}}</span>\n              </p>\n        </div>\n        \n      </ion-item>\n      <button  ion-button color="color2" (click)="copy(restProvider.account.address)">Copy Address</button>\n      <button  ion-button color="color2" (click)="copy(restProvider.account.privateKey)">Copy Private Key</button>\n\n      <div *ngIf="!accountBalance">\n        <ion-item>\n          <p>Loading account balance, please wait....</p>\n        </ion-item>\n      </div>\n\n      <div *ngIf="accountBalance">\n        <ion-item *ngFor="let balance of accountBalance.balances">\n          <p>{{balance.name}}</p>\n          <div class="container">\n            <ion-item>\n              <ion-range disabled="true" [(ngModel)]="netWorth"  ></ion-range> \n            </ion-item>\n              <p>\n                <span>{{balance.name}}</span>\n                <span>{{balance.balance}}</span>\n              </p>\n          </div>\n        </ion-item>\n        \n\n        <ion-item *ngFor="let frozen of accountBalance.frozen.balances">\n            <div class="container">\n                <p>\n                  <span>{{frozen.amount}}</span>\n                  <span>Sun</span>\n                  <span>Expires in</span>\n                  <span>{{frozen.expires}}</span>\n                </p>\n\n            </div>\n          </ion-item>\n        <button ion-button color="color2" (click)="freeze(\'freeze\')">Freeze</button>\n          \n          <button  ion-button color="color2" (click)="unfreeze(\'release\')">Release</button>\n          \n      </div>\n      <div *ngIf="tronPrice">\n      <ion-item *ngFor="let price of tronPrice">\n          <p>Tron price</p>\n        <div class="container">\n            <p>\n              <span>TRX / BTC</span>\n              <span>{{price.price_btc}}</span>\n            </p>\n        </div>\n        \n        <div class="container">\n            <p>\n              <span>TRX / USD</span>\n              <span>{{price.price_usd}}</span>\n            </p>\n        </div>\n      </ion-item>\n    </div> \n  </ion-list>\n\n  <!-- most use -->\n  <div class="mostUse">\n    <p class="myTitle">Most Use</p>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-3>\n          <button block ion-button (click)="goTo(\'TransferPage\')">\n            <ion-icon class="banki-transfer"></ion-icon>\n            <p>Transfer Payment</p>\n          </button>\n        </ion-col>\n        <ion-col col-3>\n          <button block ion-button (click)="goTo(\'RequestPage\')">\n            <ion-icon class="banki-converter"></ion-icon>\n            <p>Request Payment</p>\n          </button>\n        </ion-col>\n        <ion-col col-3>\n          <button block ion-button (click)="goTo(\'VotePage\')" >\n            <ion-icon class="banki-exchange"></ion-icon>\n            <p>Vote</p>\n          </button>\n        </ion-col>\n        <ion-col col-3>\n          <button block ion-button (click)="goTo(\'SettingPage\')">\n            <ion-icon class="banki-setting"></ion-icon>\n            <p>Setting</p>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/wli3/Projects/nextgeniuswallet/src/pages/summary/summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__["a" /* Clipboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], SummaryPage);
    return SummaryPage;
}());

//# sourceMappingURL=summary.js.map

/***/ })

});
//# sourceMappingURL=8.js.map