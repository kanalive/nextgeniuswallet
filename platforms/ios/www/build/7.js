webpackJsonp([7],{

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsDetailsPageModule", function() { return TransactionsDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transactions_details__ = __webpack_require__(438);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TransactionsDetailsPageModule = /** @class */ (function () {
    function TransactionsDetailsPageModule() {
    }
    TransactionsDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transactions_details__["a" /* TransactionsDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transactions_details__["a" /* TransactionsDetailsPage */]),
            ],
        })
    ], TransactionsDetailsPageModule);
    return TransactionsDetailsPageModule;
}());

//# sourceMappingURL=transactions-details.module.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsDetailsPage; });
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


var TransactionsDetailsPage = /** @class */ (function () {
    function TransactionsDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TransactionsDetailsPage.prototype.ionViewDidLoad = function () {
        console.log("view loaded");
        this.getTranferFromParam();
    };
    TransactionsDetailsPage.prototype.getTranferFromParam = function () {
        this.transfer = this.navParams.get('transferData');
        console.log(this.navParams.data);
    };
    TransactionsDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transactions-details',template:/*ion-inline-start:"/Users/wli3/Projects/nextgeniuswallet/src/pages/transactions-details/transactions-details.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-buttons start >\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="ios-menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>Transaction details</ion-title>\n      <ion-buttons end >\n        <button ion-button icon-only (click)="logOut()">\n          <ion-icon name="ios-log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n  \n    <ion-list *ngIf="transfer">\n  \n      <ion-item>\n          <div class="container">\n              <p>\n                <span>Timestamp</span>\n                <span>{{transfer.timestamp| date:\'yyyy-MM-dd HH:mm a z\':\'+0800\'}}</span>\n              </p>\n          </div>\n          \n          <div class="container">\n              <p>\n                  <span>Amount</span>\n                  <span>{{transfer.amount}} {{transfer.tokenName}}</span>\n                </p>\n          </div>\n          \n  \n          <div class="container">\n              <p>\n                <span>Status</span>\n                <span *ngIf="transfer.confirmed">Confirmed</span>\n                <span *ngIf="!transfer.confirmed">Pending</span>\n              </p>\n          </div>\n\n          <div class="container">\n              <p>\n                <span>From</span>\n                <span>{{transfer.transferFromAddress}}</span>\n              </p>\n          </div>\n\n          <div class="container">\n              <p>\n                <span>To</span>\n                <span>{{transfer.transferToAddress}}</span>\n              </p>\n          </div>\n\n        </ion-item>\n\n\n    </ion-list>\n  \n    <!-- most use -->\n\n  </ion-content>\n  '/*ion-inline-end:"/Users/wli3/Projects/nextgeniuswallet/src/pages/transactions-details/transactions-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TransactionsDetailsPage);
    return TransactionsDetailsPage;
}());

//# sourceMappingURL=transactions-details.js.map

/***/ })

});
//# sourceMappingURL=7.js.map