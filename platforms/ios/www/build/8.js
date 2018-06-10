webpackJsonp([8],{

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenDetailPageModule", function() { return TokenDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__token_detail__ = __webpack_require__(436);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TokenDetailPageModule = /** @class */ (function () {
    function TokenDetailPageModule() {
    }
    TokenDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__token_detail__["a" /* TokenDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__token_detail__["a" /* TokenDetailPage */]),
            ],
        })
    ], TokenDetailPageModule);
    return TokenDetailPageModule;
}());

//# sourceMappingURL=token-detail.module.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenDetailPage; });
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



var TokenDetailPage = /** @class */ (function () {
    function TokenDetailPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
    }
    TokenDetailPage.prototype.ionViewDidLoad = function () {
        this.getToken(this.navParams.get('TokenName'));
    };
    // get token
    TokenDetailPage.prototype.getToken = function (name) {
        var _this = this;
        this.restProvider.getToken(name).then(function (data) {
            console.log(data);
            _this.token = data;
        });
    };
    TokenDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-token-detail',template:/*ion-inline-start:"/Users/wli3/Projects/nextgeniuswallet/src/pages/token-detail/token-detail.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-buttons start >\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="ios-menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>Token details</ion-title>\n      <ion-buttons end >\n        <button ion-button icon-only (click)="logOut()">\n          <ion-icon name="ios-log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n  \n    <ion-list *ngIf="token">\n  \n      <ion-item>\n          <p>Token - {{token.name}}</p>\n          <span>{{token.description}}</span>\n          <hr />\n          <div class="container">\n              <p>\n                <span>Website</span>\n                <span>{{token.url}}</span>\n              </p>\n          </div>\n          \n          <div class="container">\n              <p>\n                  <span>Total supply</span>\n                  <span>{{token.totalSupply}}</span>\n                </p>\n          </div>\n          \n  \n          <div class="container">\n              <p>\n                <span>Issuer</span>\n                <span>{{token.ownerAddress}}</span>\n              </p>\n          </div>\n\n          <div class="container">\n              <p>\n                <span>Date created</span>\n                <span>{{token.dateCreated| date:\'yyyy-MM-dd HH:mm a z\':\'+0800\'}}</span>\n              </p>\n          </div>\n\n          <div class="container">\n              <p>\n                <span>Start date</span>\n                <span>{{token.startTime| date:\'yyyy-MM-dd HH:mm a z\':\'+0800\'}}</span>\n              </p>\n          </div>\n\n          <div class="container">\n              <p>\n                <span>End date</span>\n                <span>{{token.endTime| date:\'yyyy-MM-dd HH:mm a z\':\'+0800\'}}</span>\n              </p>\n          </div>\n\n          <div class="container">\n              <p>\n                <span>Token holders</span>\n                <span>{{token.nrOfTokenHolders}}</span>\n              </p>\n          </div>\n\n          <div class="container">\n              <p>\n                <span>No. of Transfers</span>\n                <span>{{token.totalTransactions}}</span>\n              </p>\n          </div>\n\n        </ion-item>\n\n\n    </ion-list>\n  \n    <!-- most use -->\n\n  </ion-content>\n  '/*ion-inline-end:"/Users/wli3/Projects/nextgeniuswallet/src/pages/token-detail/token-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], TokenDetailPage);
    return TokenDetailPage;
}());

//# sourceMappingURL=token-detail.js.map

/***/ })

});
//# sourceMappingURL=8.js.map