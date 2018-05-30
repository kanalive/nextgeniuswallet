webpackJsonp([4],{

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferPageModule", function() { return TransferPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transfer__ = __webpack_require__(435);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TransferPageModule = /** @class */ (function () {
    function TransferPageModule() {
    }
    TransferPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transfer__["a" /* TransferPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transfer__["a" /* TransferPage */]),
            ],
        })
    ], TransferPageModule);
    return TransferPageModule;
}());

//# sourceMappingURL=transfer.module.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_qr_scanner__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TransferPage = /** @class */ (function () {
    function TransferPage(navCtrl, alertCtrl, qrScanner, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.qrScanner = qrScanner;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.fromAccount = this.restProvider.account.address;
        this.toAccount = '';
        this.show = false;
        this.busy = false;
        this.availableFund = 0;
        this.ONE_TRX = 1000000;
        this.getAccountByAddress();
    }
    TransferPage.prototype.getAccountByAddress = function () {
        var _this = this;
        console.log("getbalance in transfer page called");
        this.restProvider.getAccountByAddress(this.fromAccount)
            .then(function (data) {
            console.log(_this.accountBalance);
            _this.accountBalance = data;
            _this.availableFund = (data.balance) / _this.ONE_TRX;
            console.log(data);
        });
    };
    TransferPage.prototype.transfer = function () {
        var _this = this;
        console.log("transfer in transfer page called");
        this.busy = true;
        if (this.amount > this.availableFund) {
            alert("Insufficient account balance, transfer cancelled.");
        }
        else {
            this.restProvider.send("TRX", this.toAccount, this.amount)
                .then(function (data) {
                console.log(data);
                if (data.success) {
                    _this.showConfirmAlert();
                    _this.busy = false;
                    _this.getAccountByAddress();
                }
                else {
                    alert(data.message);
                }
            });
        }
    };
    TransferPage.prototype.showConfirmAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Transfer successful',
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    TransferPage.prototype.scan = function () {
        var _this = this;
        // Optionally request the permission early
        console.log("trying to scan");
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // camera permission was granted
                console.log("camera permission was granted");
                // start scanning
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    console.log('Scanned something', text);
                    _this.toAccount = text;
                    _this.qrScanner.hide(); // hide camera preview
                    scanSub_1.unsubscribe(); // stop scanning
                });
            }
            else if (status.denied) {
                console.log('camera permission was permanently denied');
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
                console.log('permission was denied, but not permanently');
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    };
    // logOut Function 
    TransferPage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    TransferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transfer',template:/*ion-inline-start:"/Users/wli3/Projects/nextgeniuswallet/src/pages/transfer/transfer.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Transfer / Payment </ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="appForm">\n    <ion-list>\n      <ion-list-header>\n          Transfer\n      </ion-list-header>\n      <!-- Accoun-From Select -->\n      <div *ngIf="!accountBalance">\n        <p>Loading account balance, please wait...</p>\n      </div>\n      <div *ngIf="accountBalance">\n      <ion-item *ngFor="let balance of accountBalance.balances">\n          <ion-label stacked>From account - {{fromAccount}}</ion-label>\n          <ion-input disabled="true" value="{{availableFund + \' TRX\'}}"></ion-input>\n         \n        </ion-item>\n      </div>\n      <!-- Account-To Select -->\n      <ion-item >\n        <ion-label stacked>To account</ion-label>\n          <ion-input [(ngModel)]="toAccount"></ion-input>\n         \n      </ion-item>\n      <!--<button ion-button block color="color2" (click)="scan()">Scan QR code</button>-->\n        <!-- amount Input -->\n      <ion-item>\n        <ion-label stacked>Amount</ion-label>\n        <ion-input type="num" [(ngModel)]="amount" placeholder="Type here"></ion-input>\n      </ion-item> \n    </ion-list> \n  </div>\n  \n  <button ion-button block color="color2" (click)="transfer()">Continue</button>\n  <p class="result" *ngIf="show == true">{{result}}</p>\n</ion-content>\n\n'/*ion-inline-end:"/Users/wli3/Projects/nextgeniuswallet/src/pages/transfer/transfer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_qr_scanner__["a" /* QRScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], TransferPage);
    return TransferPage;
}());

//# sourceMappingURL=transfer.js.map

/***/ })

});
//# sourceMappingURL=4.js.map