webpackJsonp([6],{

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPageModule", function() { return TransactionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transactions__ = __webpack_require__(441);
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

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPage; });
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



var TransactionsPage = /** @class */ (function () {
    function TransactionsPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
    }
    TransactionsPage.prototype.ionViewDidLoad = function () {
        this.getTransfers();
    };
    // goTo Function 
    TransactionsPage.prototype.goTo = function (page, transfer) {
        console.log(transfer);
        this.navCtrl.push(page), { transferData: "1" };
    };
    TransactionsPage.prototype.getTransfers = function () {
        var _this = this;
        this.restProvider.getTransfers(this.restProvider.account.address, 0).then(function (data) {
            console.log(data);
            _this.transfers = data;
        });
    };
    TransactionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transactions',template:/*ion-inline-start:"/Users/wli3/Projects/nextgeniuswallet/src/pages/transactions/transactions.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Account Transactions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  \n  <div class="appForm" *ngIf="transfers">\n    <p class="myLabel">{{transfers.total}} total transactions</p>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12 col-md-6 col-lg-4  *ngFor="let item of transfers.transfers">\n\n\n          <button ion-item *ngIf="item.transferToAddress == restProvider.account.address">\n            <p class="in">Deposit</p>\n              <!-- <ion-icon item-right name="md-arrow-dropright"></ion-icon> -->\n              <h5>{{item.timestamp| date:\'yyyy-MM-dd HH:mm a z\':\'+0800\'}}</h5>\n              <p>{{item.amount}} {{item.tokenName}}</p>\n              <p *ngIf="item.confirmed">Confirmed</p>\n              <p class="cost" *ngIf="!item.confirmed">Pending</p>\n              <p><span>From </span>{{item.transferFromAddress}}</p>\n              <p><span>To </span>{{item.transferToAddress}}</p>\n            </button>\n            <button ion-item *ngIf="item.transferToAddress != restProvider.account.address">\n                <p class="cost">Withdraw</p>  \n              <!-- <ion-icon item-right name="md-arrow-dropright"></ion-icon> -->\n                <h5>{{item.timestamp| date:\'yyyy-MM-dd HH:mm a z\':\'+0800\'}}</h5>\n                <p>{{item.amount}} {{item.tokenName}}</p>\n                <p *ngIf="item.confirmed">Confirmed</p>\n                <p class="cost" *ngIf="!item.confirmed">Pending</p>\n                <p><span>From </span>{{item.transferFromAddress}}</p>\n                <p><span>To </span>{{item.transferToAddress}}</p>\n              </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/wli3/Projects/nextgeniuswallet/src/pages/transactions/transactions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], TransactionsPage);
    return TransactionsPage;
}());

//# sourceMappingURL=transactions.js.map

/***/ })

});
//# sourceMappingURL=6.js.map