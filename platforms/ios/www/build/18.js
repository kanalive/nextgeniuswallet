webpackJsonp([18],{

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function() { return ContactUsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_us__ = __webpack_require__(404);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactUsPageModule = /** @class */ (function () {
    function ContactUsPageModule() {
    }
    ContactUsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact_us__["a" /* ContactUsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact_us__["a" /* ContactUsPage */]),
            ],
        })
    ], ContactUsPageModule);
    return ContactUsPageModule;
}());

//# sourceMappingURL=contact-us.module.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactUsPage = /** @class */ (function () {
    function ContactUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    // logOut Function 
    ContactUsPage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    ContactUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact-us',template:/*ion-inline-start:"/Users/wli3/Projects/nextgeniuswallet/src/pages/contact-us/contact-us.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Contact Us</ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n<div class="appForm">\n  <ion-list>\n    <ion-list-header>\n        Contact Us\n    </ion-list-header>\n    <button  block ion-item>\n      <ion-icon item-left name="ios-home"></ion-icon>\n      <!--<ion-icon item-right name="md-arrow-dropright"></ion-icon>-->\n        Next Genius Community - nextgenius.com.au\n    </button> \n      <button  block ion-item>\n        <ion-icon item-left name="ios-call"></ion-icon>\n        <!--<ion-icon item-right name="md-arrow-dropright"></ion-icon>-->\n          Wen Karina Li - +61 404 085 298\n      </button> \n      <button  block ion-item>\n        <ion-icon item-left name="ios-mail-outline"></ion-icon>\n        <!--<ion-icon item-right name="md-arrow-dropright"></ion-icon>-->\n          Email - wenli@live.com.au\n      </button> \n  </ion-list>\n  <!--<ion-list>\n    <ion-list-header>\n        Follow Us\n    </ion-list-header>\n      <ion-item>\n        <button ion-button block color="faceColor" only-icon>\n          <ion-icon name="logo-facebook"></ion-icon>\n        </button>\n      </ion-item>\n      <ion-item>\n        <button ion-button block color="twitterColor" only-icon>\n          <ion-icon name="logo-twitter"></ion-icon>\n        </button>\n      </ion-item>\n      <ion-item>\n        <button ion-button block color="googleColor" only-icon>\n          <ion-icon name="logo-googleplus"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-list> -->\n    \n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/wli3/Projects/nextgeniuswallet/src/pages/contact-us/contact-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ContactUsPage);
    return ContactUsPage;
}());

//# sourceMappingURL=contact-us.js.map

/***/ })

});
//# sourceMappingURL=18.js.map