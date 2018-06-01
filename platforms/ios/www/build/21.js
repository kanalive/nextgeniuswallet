webpackJsonp([21],{

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailsPageModule", function() { return AccountDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_details__ = __webpack_require__(397);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountDetailsPageModule = /** @class */ (function () {
    function AccountDetailsPageModule() {
    }
    AccountDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__account_details__["a" /* AccountDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_details__["a" /* AccountDetailsPage */]),
            ],
        })
    ], AccountDetailsPageModule);
    return AccountDetailsPageModule;
}());

//# sourceMappingURL=account-details.module.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountDetailsPage; });
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



var AccountDetailsPage = /** @class */ (function () {
    function AccountDetailsPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.items = [
            { name: 'Product Type', date: 'Date Here' },
            { name: 'Account Relationship', date: 'Date Here' },
            { name: 'Account Restrictions', date: 'Date Here' },
            { name: 'Account Branch', date: 'Date Here' },
            { name: 'Account status', date: 'Date Here' },
            { name: 'Uncleared of funds', date: 'Date Here' },
            { name: 'Amount on hold', date: 'Date Here' },
            { name: 'Overdraft limit', date: 'Date Here' },
        ];
    }
    // goTo Function 
    AccountDetailsPage.prototype.goTo = function (page) {
        this.navCtrl.push(page);
    };
    AccountDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account-details',template:/*ion-inline-start:"/Users/wli3/Projects/nextgeniuswallet/src/pages/account-details/account-details.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Account Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- account name , number and currancy -->\n  <div class="acountTitle"> \n    <span>Account</span>\n\n    <p class="countNum">\n      123\n      <span>xxxxx</span>\n      12345\n    </p>\n\n    <span>33324 $</span>\n  </div>\n\n  <div class="details">\n    <p class="myLabel">Account Details</p>\n    <ion-grid>\n      <ion-row *ngFor="let item of items">\n        <ion-col col-8 text-left>\n          <p>{{item.name}}</p>\n        </ion-col>\n        <ion-col col-4 text-right>\n          <p>{{item.date}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <button ion-button block color="color2" (click)="goTo(\'TransactionsPage\')">Account Transactions</button>\n  </div>\n\n  <ion-list inset>\n    <ion-item *ngFor="let user of users">\n      <h2>{{user.name}}</h2>\n      <p>{{user.email}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/Users/wli3/Projects/nextgeniuswallet/src/pages/account-details/account-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], AccountDetailsPage);
    return AccountDetailsPage;
}());

//# sourceMappingURL=account-details.js.map

/***/ })

});
//# sourceMappingURL=21.js.map