webpackJsonp([1],{

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotePageModule", function() { return VotePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vote__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pipeModule__ = __webpack_require__(395);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VotePageModule = /** @class */ (function () {
    function VotePageModule() {
    }
    VotePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vote__["a" /* VotePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vote__["a" /* VotePage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_pipeModule__["a" /* PipeModule */]
            ],
            exports: []
        })
    ], VotePageModule);
    return VotePageModule;
}());

//# sourceMappingURL=vote.module.js.map

/***/ }),

/***/ 392:
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

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_search_search__ = __webpack_require__(392);
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

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VotePage; });
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




/**
 * Generated class for the VotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VotePage = /** @class */ (function () {
    function VotePage(navCtrl, alertCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.ONE_TRX = 1000000;
        this.busy = false;
        this.getWitnesses();
        this.getAccount();
    }
    // goTo Function
    VotePage.prototype.goTo = function (page) {
        this.navCtrl.setRoot(page);
    };
    // logOut Function
    VotePage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    // get accounts
    VotePage.prototype.getWitnesses = function () {
        var _this = this;
        console.log("vote page function called");
        this.restProvider.getWitnesses()
            .then(function (data) {
            _this.witnesses = data.witnesses;
            console.log(_this.witnesses);
        });
    };
    VotePage.prototype.getAccount = function () {
        var _this = this;
        this.restProvider.getAccountByAddress(null)
            .then(function (data) {
            _this.accountBalance = data;
            console.log(data);
        });
    };
    VotePage.prototype.presentPrompt = function (item) {
        var _this = this;
        var alertbox = this.alertCtrl.create({
            title: 'Votes',
            inputs: [
                {
                    name: 'votes',
                    placeholder: '0'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Submit vote',
                    handler: function (data) {
                        console.log("Submiting vote");
                        var voteCount = data["votes"];
                        var totalFrozenTrx = _this.accountBalance.frozen.total / _this.ONE_TRX;
                        console.log("Adding vote - " + voteCount + " to address " + item.address);
                        if (voteCount > totalFrozenTrx) {
                            //console.log("Insufficient fronzen account balance, "+ voteCount + " required, only " + totalFrozenTrx + "available.");
                            alert("Insufficient fronzen account balance, " + voteCount + " required, only " + totalFrozenTrx + " available.");
                        }
                        else {
                            var k = item.address;
                            var vote = {};
                            vote[k] = data["votes"];
                            console.log("Sending vote - " + voteCount + " to address " + item.address);
                            _this.busy = true;
                            _this.restProvider.postVote(vote).then(function (data) {
                                //this.showConfirmAlert();
                                if (data.code == "SUCCESS") {
                                    alert("Voting completed, thank you.");
                                    _this.busy = false;
                                }
                            });
                        }
                    }
                }
            ]
        });
        alertbox.present();
    };
    VotePage.prototype.showConfirmAlert = function () {
        console.log("show confirmation");
        var alert = this.alertCtrl.create({
            title: 'Voting completed',
            message: 'Voting completed',
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    VotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vote',template:/*ion-inline-start:"/Users/wli3/Projects/nextgeniuswallet/src/pages/vote/vote.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-buttons start >\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="ios-menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>Vote</ion-title>\n      <ion-buttons end >\n        <button ion-button icon-only (click)="logOut()">\n          <ion-icon name="ios-log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n  <ion-content padding>\n\n      <ion-searchbar [(ngModel)]="terms"></ion-searchbar>\n      <div  *ngIf="witnesses">\n\n          <ion-card *ngFor="let item of witnesses | search : terms">\n            \n              <ion-card-content>\n                \n                  <h3>{{item.url}}</h3>\n                  <p><span>Address</span>{{item.address}}</p>\n                  <p><span>Latest block number</span>{{item.latestBlockNumber}}</p>\n                  <p><span>Total produced</span>{{item.producedTotal}}</p>\n                  <p><span>Total missed</span>{{item.missedTotal}}</p>\n                  <p><span>Votes</span>{{item.votes}}</p>\n                  <button block ion-button color="color2" (click)="presentPrompt(item);">Vote</button>\n              </ion-card-content>\n          </ion-card>\n      </div>\n\n  </ion-content>\n'/*ion-inline-end:"/Users/wli3/Projects/nextgeniuswallet/src/pages/vote/vote.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], VotePage);
    return VotePage;
}());

//# sourceMappingURL=vote.js.map

/***/ })

});
//# sourceMappingURL=1.js.map