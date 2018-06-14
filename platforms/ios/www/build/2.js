webpackJsonp([2],{

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */]),
            ],
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
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



var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, navParams, restProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.address = '';
        this.password = '';
        this.showPasswd = false;
        this.presentLoadingDefault();
        console.log("load");
    }
    // goTo Function 
    WelcomePage.prototype.goTo = function (page) {
        this.navCtrl.push(page);
    };
    WelcomePage.prototype.signin = function () {
        if (this.restProvider.signin(this.address, this.password)) {
            this.goTo("SummaryPage");
        }
        else {
            alert("Invalid password");
        }
    };
    WelcomePage.prototype.showPasswordField = function () {
        this.showPasswd = true;
    };
    WelcomePage.prototype.presentLoadingDefault = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading account...'
        });
        loading.present();
        this.restProvider.loadAccountFromLocalSql()
            .then(function (data) {
            console.log(data);
            if (data != null) {
                _this.address = data["address"];
            }
            loading.dismiss();
            //this.goTo("SummaryPage");
        });
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/wli3/Projects/nextgeniuswallet/src/pages/welcome/welcome.html"*/'<ion-content >\n  <div class="welcome">\n    <div class="logo">\n      <h3>TRON wallet</h3>\n      <p>by Next Genius</p>\n    </div>\n    <p>nextgenius.com.au</p>\n    <button ion-button block color="light" (click)="goTo(\'SignUpPage\')">SIGN UP</button>\n    <div *ngIf="address!=\'\'" >\n      \n      <button ion-button block color="color2" (click)="showPasswordField()">\n        {{address}}\n      </button>\n      <div *ngIf="showPasswd">\n      <button ion-button block color="light">\n          <ion-input type="password" required [(ngModel)]="password" placeholder="Please enter password here" ></ion-input>\n        </button>\n      \n      <button ion-button block color="color2" (click)="signin()">\n          Sign in\n        </button>\n      </div>\n    </div>\n    <button ion-button block color="light"  (click)="goTo(\'SignInPage\')">Sign in other account</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/wli3/Projects/nextgeniuswallet/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

});
//# sourceMappingURL=2.js.map