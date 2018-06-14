webpackJsonp([1],{

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokensPageModule", function() { return TokensPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tokens__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipeModule__ = __webpack_require__(422);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TokensPageModule = /** @class */ (function () {
    function TokensPageModule() {
    }
    TokensPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tokens__["a" /* TokensPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tokens__["a" /* TokensPage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_pipeModule__["a" /* PipeModule */]
            ]
        })
    ], TokensPageModule);
    return TokensPageModule;
}());

//# sourceMappingURL=tokens.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SearchPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(function (it) {
            if (it.name != null) {
                return it.name.toLowerCase().includes(terms);
            }
            if (it.abbr != null) {
                return it.abbr.toLowerCase().includes(terms);
            }
            if (it.url != null) {
                return it.name.toLowerCase().includes(terms);
            }
            if (it.description != null) {
                return it.name.toLowerCase().includes(terms);
            }
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'search',
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_search_search__ = __webpack_require__(421);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__pipes_search_search__["a" /* SearchPipe */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__pipes_search_search__["a" /* SearchPipe */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__pipes_search_search__["a" /* SearchPipe */]
            ]
        })
    ], PipeModule);
    return PipeModule;
}());

//# sourceMappingURL=pipeModule.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokensPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_search_search__ = __webpack_require__(421);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TokensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TokensPage = /** @class */ (function () {
    function TokensPage(navCtrl, navParams, restProvider, searchPipe) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.searchPipe = searchPipe;
    }
    // get tokens
    TokensPage.prototype.getTokens = function (start) {
        var _this = this;
        console.log("token page function called");
        this.restProvider.getTokens(start).then(function (data) {
            console.log(data);
            _this.tokens = data;
        });
    };
    TokensPage.prototype.ionViewDidLoad = function () {
        this.getTokens(0);
    };
    TokensPage.prototype.goTo = function (page, token) {
        console.log("go to page token detail - " + token.name);
        this.restProvider.cacheCurrentToken(token);
        this.navCtrl.push(page, { TokenName: token.name });
    };
    TokensPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tokens',template:/*ion-inline-start:"/Users/wli3/Projects/nextgeniuswallet/src/pages/tokens/tokens.html"*/'\n<ion-header>\n    <ion-navbar>\n      <ion-buttons start >\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="ios-menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>Tokens</ion-title>\n      <ion-buttons end >\n        <button ion-button icon-only (click)="logOut()">\n          <ion-icon name="ios-log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content>\n    <div *ngIf="!tokens">\n      Loading tokens...\n    </div>\n    <div *ngIf="tokens">\n\n    <div class="appForm">\n      \n      <ion-searchbar [(ngModel)]="terms"></ion-searchbar>\n      <p class="myLabel">{{(tokens.total)}} tokens in total</p>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12 col-md-6 col-lg-4  *ngFor="let item of tokens.tokens| search : terms" (click)="goTo(\'TokenDetailPage\', item)">\n            <button ion-item>\n              <ion-icon item-right name="md-arrow-dropright"></ion-icon>\n                <p><span>Token: </span>{{item.name}} - {{item.abbr}}</p>\n                <p><span>Total Supply: </span>{{item.totalSupply}}</p>\n                <p><span>Total issued: </span>{{item.issued}}</p>\n                <p><span>Registered: </span>{{item.dateCreated}}</p>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>  \n  </div>\n  </ion-content>\n  '/*ion-inline-end:"/Users/wli3/Projects/nextgeniuswallet/src/pages/tokens/tokens.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_3__pipes_search_search__["a" /* SearchPipe */]])
    ], TokensPage);
    return TokensPage;
}());

//# sourceMappingURL=tokens.js.map

/***/ })

});
//# sourceMappingURL=1.js.map