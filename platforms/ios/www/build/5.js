webpackJsonp([5],{

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferPageModule", function() { return TransferPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transfer__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_qrcode2__ = __webpack_require__(239);
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
                __WEBPACK_IMPORTED_MODULE_3_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transfer__["a" /* TransferPage */]),
            ],
        })
    ], TransferPageModule);
    return TransferPageModule;
}());

//# sourceMappingURL=transfer.module.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(236);
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
    function TransferPage(navCtrl, alertCtrl, barcodeScanner, navParams, restProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.barcodeScanner = barcodeScanner;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.fromAccount = this.restProvider.account.address;
        this.toAccount = '';
        this.show = false;
        this.busy = false;
        this.availableFund = 0;
        this.ONE_TRX = 1000000;
        this.qrData = null;
        this.createdCode = null;
        this.scannedCode = null;
    }
    TransferPage.prototype.ionViewDidLoad = function () {
        this.getAccountByAddress();
        this.loading = this.loadingCtrl.create({
            content: 'Loading account...'
        });
    };
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
    // logOut Function 
    TransferPage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    TransferPage.prototype.sendTransactionHexData = function (transactionHex) {
        var _this = this;
        this.restProvider.sendTransactionHex(transactionHex).then(function (data) {
            console.log(data);
            _this.loading.dismiss();
            alert(data);
        });
    };
    TransferPage.prototype.scanCode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.scannedCode = barcodeData.text;
            var hex = JSON.parse(_this.scannedCode);
            _this.sendTransactionHexData(hex);
            _this.loading.present();
        }, function (err) {
            console.log('Error: ', err);
        });
    };
    TransferPage.prototype.getLatestBlock = function () {
        var _this = this;
        this.restProvider.getLatestBlock().then(function (data) {
            console.log(data);
            _this.latestBlock = JSON.stringify(data);
            _this.createCode(_this.latestBlock);
        });
    };
    TransferPage.prototype.createCode = function (data) {
        this.createdCode = data;
    };
    TransferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transfer',template:/*ion-inline-start:"/Users/wli3/Projects/nextgeniuswallet/src/pages/transfer/transfer.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Transfer / Payment </ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n        Transfer\n    </ion-card-header>\n    <ion-card-content>\n        <div *ngIf="!accountBalance">\n          <p>Loading account balance, please wait...</p>\n        </div>\n        <div *ngIf="accountBalance">\n          <ion-list>\n            <ion-item>\n                <ion-label stacked>From account - {{fromAccount}}</ion-label>\n                <ion-input disabled="true" value="{{availableFund + \' TRX\'}}"></ion-input>\n              </ion-item>\n              <!-- Account-To Select -->\n              <ion-item >\n                  <ion-label stacked>To account</ion-label>\n                  <ion-input [(ngModel)]="toAccount"></ion-input>\n              </ion-item>\n          <!--<button ion-button block color="color2" (click)="scan()">Scan QR code</button>-->\n            <!-- amount Input -->\n          <ion-item>\n            <ion-label stacked>Amount</ion-label>\n            <ion-input type="num" [(ngModel)]="amount" placeholder="Type here"></ion-input>\n          </ion-item> \n        </ion-list> \n      </div>\n      \n      <button ion-button block color="color2" (click)="transfer()">Continue</button>\n      <p class="result" *ngIf="show == true">{{result}}</p>\n    </ion-card-content>\n  </ion-card>\n  \n\n\n\n  <ion-card>\n\n    <ion-card-header>Transfer transaction for cold wallet (offline wallet)</ion-card-header>\n    <ion-card-content>\n\n\n            <!-- hot wallet-->\n            <button ion-button color="color2" (click)="getLatestBlock();">Get latest block</button>\n            <!-- <div *ngIf="latestBlock">\n              <p>{{latestBlock}}}</p>\n            </div> -->\n\n            <ion-card *ngIf="createdCode">\n                <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n                <!-- <ion-card-content>\n                  <p>Value: {{ createdCode }}</p>\n                </ion-card-content> -->\n              </ion-card>\n  \n            \n              <button ion-button color="color2" (click)="sendTransactionHexData();">Scan and send transaction data</button>\n              <ion-card *ngIf="scannedCode">\n                  <ion-card-content>\n                    Result from Scan: {{ scannedCode }}\n                  </ion-card-content>\n                </ion-card>\n                \n    </ion-card-content>\n  </ion-card>\n  \n  \n      \n</ion-content>\n\n'/*ion-inline-end:"/Users/wli3/Projects/nextgeniuswallet/src/pages/transfer/transfer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], TransferPage);
    return TransferPage;
}());

//# sourceMappingURL=transfer.js.map

/***/ })

});
//# sourceMappingURL=5.js.map