webpackJsonp([11],{

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in__ = __webpack_require__(435);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignInPageModule = /** @class */ (function () {
    function SignInPageModule() {
    }
    SignInPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */]),
            ],
        })
    ], SignInPageModule);
    return SignInPageModule;
}());

//# sourceMappingURL=sign-in.module.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
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



var SignInPage = /** @class */ (function () {
    function SignInPage(modalCtrl, navCtrl, navParams, restProvider) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.privateKey = '';
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.password = "";
    }
    SignInPage.prototype.doLogin = function (page) {
        if (this.IsValidAddress() && this.password != "") {
            this.restProvider.loginOtherAccount(this.firstName, this.lastName, this.email, this.privateKey, this.address, this.password);
            this.navCtrl.setRoot(page);
        }
        else {
            alert("Please enter valid address and password.");
        }
    };
    // Call Forgot Password Modal
    SignInPage.prototype.presentModal = function (modalPage) {
        var modal = this.modalCtrl.create(modalPage);
        modal.present();
    };
    SignInPage.prototype.getAddress = function () {
        if (this.privateKey != '') {
            this.address = this.restProvider.getAddressFromPrivateKey(this.privateKey);
        }
    };
    SignInPage.prototype.IsValidAddress = function () {
        if (this.address != null)
            return true;
        else
            return false;
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-in',template:/*ion-inline-start:"/Users/wli3/Projects/nextgeniuswallet/src/pages/sign-in/sign-in.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>SIGN IN</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="appForm">\n    <ion-list>\n      <!-- password input -->\n      <ion-item>\n        <ion-label floating>Private key</ion-label>\n        <ion-icon name="ios-lock-outline" item-left></ion-icon>\n        <ion-input type="text" [(ngModel)]="privateKey"></ion-input>\n      </ion-item>\n      <!-- Email input -->\n      <ion-item *ngIf="address">\n          <ion-label floating>Address</ion-label>\n          <ion-icon name="ios-home-outline" item-left></ion-icon>\n          <ion-input disabled="true" type="text" [(ngModel)]="address"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button  ion-button block color="color2" (click)="getAddress()">Get Address</button>\n\n      <div *ngIf="address">\n          <ion-list>\n              <ion-item>\n                  <ion-label floating>Password</ion-label>\n                  <ion-icon name="ios-lock-outline" item-left></ion-icon>\n                  <ion-input type="password" required [(ngModel)]="password"></ion-input>\n                </ion-item>\n            <ion-item>\n              <ion-label floating>First Name</ion-label>\n              <ion-icon name="ios-lock-outline" item-left></ion-icon>\n              <ion-input type="text" [(ngModel)]="firstName"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Last Name</ion-label>\n                <ion-icon name="ios-lock-outline" item-left></ion-icon>\n                <ion-input type="text" [(ngModel)]="lastName"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label floating>Email address</ion-label>\n                  <ion-icon name="ios-lock-outline" item-left></ion-icon>\n                  <ion-input type="text" [(ngModel)]="email"></ion-input>\n                </ion-item>\n            </ion-list>\n        \n    <button ion-button block color="color2" (click)="doLogin(\'SummaryPage\')">Sign in</button>\n  </div>\n</div>\n  <!--<p float-right (click)=" presentModal(\'ForgotPasswordPage\')">Forgot Password ?</p>-->\n</ion-content>\n'/*ion-inline-end:"/Users/wli3/Projects/nextgeniuswallet/src/pages/sign-in/sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ })

});
//# sourceMappingURL=11.js.map