webpackJsonp([9],{

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up__ = __webpack_require__(430);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignUpPageModule = /** @class */ (function () {
    function SignUpPageModule() {
    }
    SignUpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]),
            ],
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());

//# sourceMappingURL=sign-up.module.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpPage = /** @class */ (function () {
    function SignUpPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.newAccountCreated = false;
        this.firstName = "";
        this.lastName = "";
        this.email = "";
    }
    // set root page 
    SignUpPage.prototype.doLogin = function (page) {
        this.navCtrl.setRoot(page);
    };
    SignUpPage.prototype.createNewAccount = function () {
        this.restProvider.createNewAccount(this.firstName, this.lastName, this.email);
        this.newAccountCreated = true;
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"/Users/wli3/Projects/nextgeniuswallet/src/pages/sign-up/sign-up.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Generate new account</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <div class="appForm">\n        <ion-list>\n          <ion-item>\n            <ion-label floating>First Name</ion-label>\n            <ion-icon name="ios-lock-outline" item-left></ion-icon>\n            <ion-input type="text" [(ngModel)]="firstName"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label floating>Last Name</ion-label>\n              <ion-icon name="ios-lock-outline" item-left></ion-icon>\n              <ion-input type="text" [(ngModel)]="lastName"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Email address</ion-label>\n                <ion-icon name="ios-lock-outline" item-left></ion-icon>\n                <ion-input type="text" [(ngModel)]="email"></ion-input>\n              </ion-item>\n          </ion-list>\n      </div>\n    <button ion-button block color="color2" (click)="createNewAccount()">Create New Account</button>\n\n    <ion-card *ngIf="restProvider.account && newAccountCreated">\n      <ion-card-content>\n        <h5>New account created!</h5>\n        <p>Address - {{restProvider.account.address}}</p\n          ><button ion-button block color="color2" (click)="doLogin(\'SummaryPage\')">Sign in</button>\n\n      </ion-card-content>\n      \n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/wli3/Projects/nextgeniuswallet/src/pages/sign-up/sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ })

});
//# sourceMappingURL=9.js.map