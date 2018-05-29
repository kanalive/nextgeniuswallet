webpackJsonp([18],{

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiariesPageModule", function() { return BeneficiariesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__beneficiaries__ = __webpack_require__(399);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BeneficiariesPageModule = /** @class */ (function () {
    function BeneficiariesPageModule() {
    }
    BeneficiariesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__beneficiaries__["a" /* BeneficiariesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__beneficiaries__["a" /* BeneficiariesPage */]),
            ],
        })
    ], BeneficiariesPageModule);
    return BeneficiariesPageModule;
}());

//# sourceMappingURL=beneficiaries.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeneficiariesPage; });
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


var BeneficiariesPage = /** @class */ (function () {
    function BeneficiariesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    // goTo Function 
    BeneficiariesPage.prototype.goTo = function (page) {
        this.navCtrl.push(page);
    };
    // logOut Function 
    BeneficiariesPage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    BeneficiariesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-beneficiaries',template:/*ion-inline-start:"/Users/wli3/Projects/nextgeniuswallet/src/pages/beneficiaries/beneficiaries.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Beneficiaries</ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <div class="appForm">\n    <ion-list>\n      <ion-list-header>\n          Beneficiaries\n      </ion-list-header>\n      \n      <button  block ion-item (click)="goTo(\'AddAccountPage\')">\n        <ion-icon item-right name="md-arrow-dropright"></ion-icon>\n        Other Account\n      </button> \n\n      <button  block ion-item (click)="goTo(\'AddAccountPage\')">\n        <ion-icon item-right name="md-arrow-dropright"></ion-icon>\n        Other Cards\n      </button> \n    </ion-list> \n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/wli3/Projects/nextgeniuswallet/src/pages/beneficiaries/beneficiaries.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], BeneficiariesPage);
    return BeneficiariesPage;
}());

//# sourceMappingURL=beneficiaries.js.map

/***/ })

});
//# sourceMappingURL=18.js.map