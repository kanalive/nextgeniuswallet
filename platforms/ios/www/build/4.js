webpackJsonp([4],{

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transfer2PageModule", function() { return Transfer2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transfer2__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_qrcode2__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Transfer2PageModule = /** @class */ (function () {
    function Transfer2PageModule() {
    }
    Transfer2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transfer2__["a" /* Transfer2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transfer2__["a" /* Transfer2Page */]),
            ],
        })
    ], Transfer2PageModule);
    return Transfer2PageModule;
}());

//# sourceMappingURL=transfer2.module.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transfer2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Transfer2Page = /** @class */ (function () {
    function Transfer2Page(navCtrl, restProvider, navParams, barcodeScanner, clipboard) {
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.clipboard = clipboard;
        this.code = 'some sample string';
        this.generated = '';
        this.latestBlock = '';
        this.qrData = null;
        this.createdCode = null;
        this.scannedCode = null;
        //this.code = this.restProvider.account.address;
    }
    Transfer2Page.prototype.displayQrCode = function () {
        return this.generated !== '';
    };
    Transfer2Page.prototype.scanCode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.scannedCode = barcodeData.text;
        }, function (err) {
            console.log('Error: ', err);
        });
    };
    Transfer2Page.prototype.copy = function (text) {
        this.clipboard.copy(text).then(function (data) {
            alert("copied " + data);
        });
    };
    // process() {
    //   const qrcode = QRCode;
    //   const self = this;
    //   qrcode.toDataURL(self.code, { errorCorrectionLevel: 'H' }, function (err, url) {
    //     self.generated = url;
    //   })
    // }
    Transfer2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestPage');
    };
    Transfer2Page.prototype.signTransactionLocally = function () {
        var _this = this;
        var latestBlockObj = JSON.parse(this.scannedCode);
        this.restProvider.offlineSignSendTransaction("TRX", this.toAccount, this.amount, latestBlockObj).then(function (data) {
            _this.qrData = data;
            console.log(_this.qrData);
            alert("Sign transaction completed, please generate a QR code, use a hot wallet to scan this QR code to sync transaction to server.");
        });
    };
    Transfer2Page.prototype.createCode = function () {
        this.createdCode = JSON.parse(this.qrData);
    };
    Transfer2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transfer2',template:/*ion-inline-start:"/Users/wli3/Projects/nextgeniuswallet/src/pages/transfer2/transfer2.html"*/'\n<ion-header>\n    <ion-navbar>\n      <ion-buttons start >\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="ios-menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>Cold wallet send payment</ion-title>\n      <ion-buttons end >\n        <button ion-button icon-only (click)="logOut()">\n          <ion-icon name="ios-log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n      \n\n      <ion-item>\n        </ion-item>\n        <p>Step 1. Scan latest block data from a hot wallet</p>\n        <button ion-button full icon-left (click)="scanCode()" color="color2"><ion-icon name="qr-scanner"></ion-icon>Scan latest block data</button>\n        <ion-card *ngIf="scannedCode">\n            <ion-card-content>\n              Result from Scan: {{ scannedCode }}\n            </ion-card-content>\n          </ion-card>\n        \n\n          <ion-card>\n              <ion-card-content>\n                  <!-- cold wallet-->\n                  <ion-list>\n    \n                      <ion-item >\n                          <ion-label stacked>To account</ion-label>\n                            <ion-input [(ngModel)]="toAccount"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                          <ion-label stacked>Amount</ion-label>\n                          <ion-input type="num" [(ngModel)]="amount" placeholder="Type here"></ion-input>\n                        </ion-item> \n                </ion-list>\n                \n                <p>{{transactionHex}}</p>\n    \n    <!--               \n                  <ion-card>\n                    <ion-card-content>\n                        <ion-input [(ngModel)]="code" type="text" placeholder="Enter code here"></ion-input>\n                        <button ion-button block  color="color2" (click)="process();">Process</button>\n            \n                        <img *ngIf="displayQrCode()" [src]="generated" />\n                    </ion-card-content>\n                      \n                  </ion-card> -->\n                \n              </ion-card-content>\n          </ion-card>\n\n        <button ion-button full icon-left color="color2" (click)="signTransactionLocally()"><ion-icon name="barcode"></ion-icon>Sign transaction</button>        \n        <hr />\n        <button ion-button full icon-left color="color2" (click)="createCode()"><ion-icon name="barcode"></ion-icon>Generate transaction QR code</button>        \n        <ion-card *ngIf="createdCode">\n            <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n            <ion-card-content>\n              <p>Value: {{ createdCode }}</p>\n            </ion-card-content>\n          </ion-card>\n         \n          \n\n\n      \n  </ion-content>\n  '/*ion-inline-end:"/Users/wli3/Projects/nextgeniuswallet/src/pages/transfer2/transfer2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__["a" /* Clipboard */]])
    ], Transfer2Page);
    return Transfer2Page;
}());

//# sourceMappingURL=transfer2.js.map

/***/ })

});
//# sourceMappingURL=4.js.map