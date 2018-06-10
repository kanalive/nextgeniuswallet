webpackJsonp([14],{

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalAccountPageModule", function() { return PersonalAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_account__ = __webpack_require__(408);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonalAccountPageModule = /** @class */ (function () {
    function PersonalAccountPageModule() {
    }
    PersonalAccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__personal_account__["a" /* PersonalAccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__personal_account__["a" /* PersonalAccountPage */]),
            ],
        })
    ], PersonalAccountPageModule);
    return PersonalAccountPageModule;
}());

//# sourceMappingURL=personal-account.module.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalAccountPage; });
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



var PersonalAccountPage = /** @class */ (function () {
    function PersonalAccountPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.getAccounts();
    }
    // get accounts
    PersonalAccountPage.prototype.getAccounts = function () {
        var _this = this;
        console.log("personal account page function called");
        this.restProvider.getAccountByAddress(null)
            .then(function (data) {
            _this.accounts = data;
            console.log(_this.accounts);
        });
    };
    // goTo Function 
    PersonalAccountPage.prototype.goTo = function (page) {
        this.navCtrl.push(page);
    };
    // logOut Function 
    PersonalAccountPage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    PersonalAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-personal-account',template:/*ion-inline-start:"/Users/wli3/Projects/nextgeniuswallet/src/pages/personal-account/personal-account.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Personal Account</ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content >\n  <p class="myTitle">Accounts</p>\n  <!-- account Name,account Number and currency -->\n  <ion-grid>\n    <ion-row>\n      <div *ngIf="accounts">\n        <div class="account">{{(accounts.length)}} accounts</div>\n        <ion-col col-6 col-md-4 col-lg-3 *ngFor="let item of accounts; let i=index">\n          <div *ngIf="i<20">\n            <div class="account" (click)="goTo(\'AccountDetailsPage\')" >\n              <p>{{item.name}}</p>\n\n              <p class="countNum">\n                {{item.address}}\n                <span>xxxxx</span>\n                {{item.balanceNum}}\n              </p>\n\n              <p>{{item.balance}} $</p>\n            </div>\n          </div>\n        </ion-col>\n      </div>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/wli3/Projects/nextgeniuswallet/src/pages/personal-account/personal-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], PersonalAccountPage);
    return PersonalAccountPage;
}());

//# sourceMappingURL=personal-account.js.map

/***/ })

});
//# sourceMappingURL=14.js.map