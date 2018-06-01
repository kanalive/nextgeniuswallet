webpackJsonp([22],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tronscan_client__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tronscan_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__tronscan_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tronscan_client_src_utils_account__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tronscan_client_src_utils_account___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__tronscan_client_src_utils_account__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tronscan_client_src_utils_crypto__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tronscan_client_src_utils_crypto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__tronscan_client_src_utils_crypto__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http, storage, client) {
        this.http = http;
        this.storage = storage;
        this.client = client;
        this.ONE_TRX = 1000000;
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.loadAccountFromLocalSql = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get('account').then(function (val) {
                console.log('account');
                console.log(val);
                resolve(val);
                _this.account = val;
            });
        });
    };
    RestProvider.prototype.loginOtherAccount = function (firstName, lastName, email, privateKey, address) {
        this.account.firstName = firstName;
        this.account.lastName = lastName;
        this.account.email = email;
        this.account.privateKey = privateKey;
        this.account.address = address;
        this.account.profileImage = null;
        this.storage.set('account', this.account);
    };
    RestProvider.prototype.createNewAccount = function (firstName, lastName, email) {
        this.account = Object(__WEBPACK_IMPORTED_MODULE_4__tronscan_client_src_utils_account__["generateAccount"])();
        this.account.firstName = firstName;
        this.account.lastName = lastName;
        this.account.email = email;
        this.account.profileImage = null;
        this.storage.set('account', this.account);
    };
    RestProvider.prototype.saveProfileImageintoLocalStorage = function (base64Image) {
        this.account.profileImage = base64Image;
        this.storage.set('account', this.account);
    };
    RestProvider.prototype.getAddressFromPrivateKey = function (privateKey) {
        console.log("getAddressFromPrivateKey");
        var addr = Object(__WEBPACK_IMPORTED_MODULE_5__tronscan_client_src_utils_crypto__["pkToAddress"])(privateKey);
        console.log(addr);
        this.account = { address: addr, privatekey: privateKey };
        this.storage.set('account', this.account);
        return addr;
    };
    RestProvider.prototype.getTronPrice = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("https://api.coinmarketcap.com/v1/ticker/tronix/").subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getAccountByAddress = function (address) {
        console.log("rest service called - getAccountByAddress");
        if (!address) {
            address = this.account.address;
        }
        return this.client.getAccountByAddress(address);
    };
    RestProvider.prototype.getWitnesses = function () {
        console.log("rest service called - getWitnesses");
        return this.client.getWitnesses();
    };
    RestProvider.prototype.send = function (token, to, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var pk;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pk = this.account.privateKey;
                        console.log("transfer " + amount + token + " to " + to);
                        return [4 /*yield*/, this.client.send(token, this.account.address, to, amount * this.ONE_TRX)(pk)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RestProvider.prototype.freezeBalance = function (address, amount, duration) {
        return __awaiter(this, void 0, void 0, function () {
            var pk;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pk = this.account.privateKey;
                        return [4 /*yield*/, this.client.freezeBalance(address, amount * this.ONE_TRX, duration)(pk)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RestProvider.prototype.unfreezeBalance = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var pk;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pk = this.account.privateKey;
                        return [4 /*yield*/, this.client.unfreezeBalance(address)(pk)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RestProvider.prototype.postVote = function (myVotes) {
        return __awaiter(this, void 0, void 0, function () {
            var pk;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pk = this.account.privateKey;
                        return [4 /*yield*/, this.client.voteForWitnesses(this.account.address, myVotes)(pk)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__tronscan_client__["Client"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__tronscan_client__["Client"]) === "function" && _a || Object])
    ], RestProvider);
    return RestProvider;
    var _a;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account-details/account-details.module": [
		366,
		21
	],
	"../pages/add-account/add-account.module": [
		367,
		20
	],
	"../pages/address-details/address-details.module": [
		368,
		19
	],
	"../pages/beneficiaries/beneficiaries.module": [
		369,
		18
	],
	"../pages/contact-us/contact-us.module": [
		371,
		17
	],
	"../pages/currency-convertor/currency-convertor.module": [
		370,
		16
	],
	"../pages/find-us/find-us.module": [
		372,
		15
	],
	"../pages/forgot-password/forgot-password.module": [
		373,
		14
	],
	"../pages/personal-account/personal-account.module": [
		375,
		13
	],
	"../pages/profile/profile.module": [
		374,
		12
	],
	"../pages/request/request.module": [
		376,
		0
	],
	"../pages/setting/setting.module": [
		377,
		11
	],
	"../pages/sign-in/sign-in.module": [
		378,
		10
	],
	"../pages/sign-up/sign-up.module": [
		379,
		9
	],
	"../pages/summary/summary.module": [
		380,
		8
	],
	"../pages/tokens/tokens.module": [
		381,
		7
	],
	"../pages/transactions-details/transactions-details.module": [
		382,
		6
	],
	"../pages/transactions/transactions.module": [
		383,
		5
	],
	"../pages/transfer/transfer.module": [
		384,
		4
	],
	"../pages/update-profile/update-profile.module": [
		386,
		3
	],
	"../pages/vote/vote.module": [
		385,
		1
	],
	"../pages/welcome/welcome.module": [
		387,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, restProvider) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.restProvider = restProvider;
        this.rootPage = 'WelcomePage';
        this.animateVarible = false;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Summary', component: 'SummaryPage', icon: 'banki-summary' },
            { title: 'Request Payment', component: 'RequestPage', icon: 'banki-transfer' },
            { title: 'Transfer Payment', component: 'TransferPage', icon: 'banki-exchange' },
            { title: 'Votes', component: 'VotePage', icon: 'banki-converter' },
            { title: 'Contact us', component: 'ContactUsPage', icon: 'banki-phone' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.restProvider.loadAccountFromLocalSql();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/wli3/Projects/nextgeniuswallet/src/app/app.html"*/'<ion-menu [content]="content" swipeEnabled="false" type="overlay">\n  <ion-content>\n    <ion-list>\n      <ion-item menuClose  *ngFor="let p of pages" (click)="openPage(p.component)">\n        <ion-icon class="{{p.icon}}" item-left></ion-icon>\n        {{p.title}}\n      </ion-item>\n    </ion-list>\n  </ion-content>\n  <ion-footer>\n    <button ion-button clear menuClose (click)="openPage(\'WelcomePage\')">Log out</button>\n  </ion-footer>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content  [class.animateApp]="animateVarible==true" swipeBackEnabled="false"></ion-nav> '/*ion-inline-end:"/Users/wli3/Projects/nextgeniuswallet/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(253);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_clipboard__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_qr_scanner__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tronscan_client__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tronscan_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__tronscan_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_rest_rest__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var config = {
    backButtonText: '',
    backButtonIcon: 'ios-arrow-round-back',
    iconMode: 'ios',
    mode: 'ios',
    modalEnter: 'modal-slide-in',
    modalLeave: 'modal-slide-out',
    pageTransition: 'ios',
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], config, {
                    links: [
                        { loadChildren: '../pages/account-details/account-details.module#AccountDetailsPageModule', name: 'AccountDetailsPage', segment: 'account-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-account/add-account.module#AddAccountPageModule', name: 'AddAccountPage', segment: 'add-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/address-details/address-details.module#AddressDetailsPageModule', name: 'AddressDetailsPage', segment: 'address-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/beneficiaries/beneficiaries.module#BeneficiariesPageModule', name: 'BeneficiariesPage', segment: 'beneficiaries', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/currency-convertor/currency-convertor.module#CurrencyConvertorPageModule', name: 'CurrencyConvertorPage', segment: 'currency-convertor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-us/contact-us.module#ContactUsPageModule', name: 'ContactUsPage', segment: 'contact-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/find-us/find-us.module#FindUsPageModule', name: 'FindUsPage', segment: 'find-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal-account/personal-account.module#PersonalAccountPageModule', name: 'PersonalAccountPage', segment: 'personal-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/request/request.module#RequestPageModule', name: 'RequestPage', segment: 'request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/summary/summary.module#SummaryPageModule', name: 'SummaryPage', segment: 'summary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tokens/tokens.module#TokensPageModule', name: 'TokensPage', segment: 'tokens', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transactions-details/transactions-details.module#TransactionsDetailsPageModule', name: 'TransactionsDetailsPage', segment: 'transactions-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transactions/transactions.module#TransactionsPageModule', name: 'TransactionsPage', segment: 'transactions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transfer/transfer.module#TransferPageModule', name: 'TransferPage', segment: 'transfer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vote/vote.module#VotePageModule', name: 'VotePage', segment: 'vote', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-profile/update-profile.module#UpdateProfilePageModule', name: 'UpdateProfilePage', segment: 'update-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_clipboard__["a" /* Clipboard */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_qr_scanner__["a" /* QRScanner */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_9__tronscan_client__["Client"]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 310:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[232]);
//# sourceMappingURL=main.js.map