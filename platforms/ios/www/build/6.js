webpackJsonp([6],{

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPageModule", function() { return TransactionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transactions__ = __webpack_require__(439);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TransactionsPageModule = /** @class */ (function () {
    function TransactionsPageModule() {
    }
    TransactionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transactions__["a" /* TransactionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transactions__["a" /* TransactionsPage */]),
            ],
        })
    ], TransactionsPageModule);
    return TransactionsPageModule;
}());

//# sourceMappingURL=transactions.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPage; });
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



var TransactionsPage = /** @class */ (function () {
    function TransactionsPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.items = [
            { date: '15-8-2017', cost: 1000, address: 'ATM Withdrawal 12 Street Name' },
            { date: '15-8-2017', cost: 1000, address: 'ATM Withdrawal 12 Street Name' },
            { date: '15-8-2017', cost: 1000, address: 'ATM Withdrawal 12 Street Name' },
            { date: '15-8-2017', cost: 1000, address: 'ATM Withdrawal 12 Street Name' },
        ];
        this.getTransfers();
    }
    // goTo Function 
    TransactionsPage.prototype.goTo = function (page) {
        this.navCtrl.push(page);
    };
    TransactionsPage.prototype.getTransfers = function () {
        var _this = this;
        this.restProvider.getTransfers(this.restProvider.account.address, 0).then(function (data) {
            alert("success");
            console.log(data);
            _this.transfer = data;
        });
    };
    TransactionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transactions',template:/*ion-inline-start:"/Users/wli3/Projects/nextgeniuswallet/src/pages/transactions/transactions.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Account Transactions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n   <!-- account name , number and currancy -->\n  <div class="acountTitle"> \n    <span>Account</span>\n\n    <p class="countNum">\n      123\n      <span>xxxxx</span>\n      12345\n    </p>\n\n    <span>33324 $</span>\n  </div>\n  \n  <div class="appForm">\n    <p class="myLabel">Account Transactions</p>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12 col-md-6 col-lg-4  *ngFor="let item of items" (click)="goTo(\'TransactionsDetailsPage\')">\n          <button ion-item>\n            <ion-icon item-right name="md-arrow-dropright"></ion-icon>\n            <p>{{item.date}}</p>\n            <p class="cost">{{item.cost}} $</p>\n            <p>{{item.address}}</p>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/wli3/Projects/nextgeniuswallet/src/pages/transactions/transactions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], TransactionsPage);
    return TransactionsPage;
}());

//# sourceMappingURL=transactions.js.map

/***/ })

});
//# sourceMappingURL=6.js.map