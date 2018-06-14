webpackJsonp([13],{

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPageModule", function() { return RequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request__ = __webpack_require__(433);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RequestPageModule = /** @class */ (function () {
    function RequestPageModule() {
    }
    RequestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__request__["a" /* RequestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__request__["a" /* RequestPage */]),
            ],
        })
    ], RequestPageModule);
    return RequestPageModule;
}());

//# sourceMappingURL=request.module.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qrcode__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qrcode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_qrcode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(120);
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
var RequestPage = /** @class */ (function () {
    function RequestPage(navCtrl, restProvider, navParams, barcodeScanner, clipboard) {
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.clipboard = clipboard;
        this.code = 'some sample string';
        this.generated = '';
        this.code = this.restProvider.account.address;
    }
    RequestPage.prototype.displayQrCode = function () {
        return this.generated !== '';
    };
    RequestPage.prototype.copy = function (text) {
        this.clipboard.copy(text).then(function (data) {
            alert("copied " + data);
        });
    };
    RequestPage.prototype.process = function () {
        var qrcode = __WEBPACK_IMPORTED_MODULE_3_qrcode__["QRCode"];
        console.log(qrcode);
        var self = this;
        qrcode.toDataURL(self.code, { errorCorrectionLevel: 'H' }, function (err, url) {
            self.generated = url;
        });
    };
    RequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestPage');
    };
    RequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-request',template:/*ion-inline-start:"/Users/wli3/Projects/nextgeniuswallet/src/pages/request/request.html"*/'\n<ion-header>\n    <ion-navbar>\n      <ion-buttons start >\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="ios-menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>Request Payment</ion-title>\n      <ion-buttons end >\n        <button ion-button icon-only (click)="logOut()">\n          <ion-icon name="ios-log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n      \n      <ion-card>\n          <ion-card-content>\n              <p>Address</p>\n              <ion-input value="{{restProvider.account.address}}"></ion-input>\n              <br />\n              <button ion-button color="color2" (click)="copy(restProvider.account.address);">Copy</button>\n              <!--<button ion-button color="color2" (click)="process();">QRCode</button>-->\n              \n              <ion-card>\n                  <img *ngIf="displayQrCode()" [src]="generated" />\n              </ion-card>\n            \n          </ion-card-content>\n      </ion-card>\n      \n  </ion-content>\n  '/*ion-inline-end:"/Users/wli3/Projects/nextgeniuswallet/src/pages/request/request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__["a" /* Clipboard */]])
    ], RequestPage);
    return RequestPage;
}());

//# sourceMappingURL=request.js.map

/***/ })

});
//# sourceMappingURL=13.js.map