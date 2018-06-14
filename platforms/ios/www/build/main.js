webpackJsonp([24],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tronscan_client__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tronscan_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__tronscan_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tronscan_client_src_utils_account__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tronscan_client_src_utils_account___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__tronscan_client_src_utils_account__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tronscan_client_src_utils_crypto__ = __webpack_require__(50);
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




//import { SecureStorage } from 'cordova-plugin-secure-storage';


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
        //this.loadAccountFromSecureStorage();
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
    RestProvider.prototype.signin = function (address, password) {
        if (address == this.account.address && password == this.account.password) {
            return true;
        }
        else
            return false;
    };
    RestProvider.prototype.loadAccountFromSecureStorage = function () {
        console.log("loadAccountFromSecureStorage");
        // this.secureStorage = new SecureStorage(
        //   function () { alert('secure storage loading - Success')},
        //   function (error) { alert('Error ' + error); },
        //   'my_app');
        // this.secureStorage.set(
        //   function (key) { alert('Set ' + key); },
        //   function (error) {alert('Error ' + error); },
        //   'mykey', 'myvalue');
    };
    RestProvider.prototype.loginOtherAccount = function (firstName, lastName, email, privateKey, address, password) {
        this.account.firstName = firstName;
        this.account.lastName = lastName;
        this.account.email = email;
        this.account.privateKey = privateKey;
        this.account.address = address;
        this.account.profileImage = null;
        this.account.password = password;
        this.storage.set('account', this.account);
    };
    RestProvider.prototype.createNewAccount = function (firstName, lastName, email, password) {
        this.account = Object(__WEBPACK_IMPORTED_MODULE_4__tronscan_client_src_utils_account__["generateAccount"])();
        this.account.firstName = firstName;
        this.account.lastName = lastName;
        this.account.email = email;
        this.account.profileImage = null;
        this.account.password = password;
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
    RestProvider.prototype.cacheCurrentToken = function (token) {
        this.currentToken = token;
    };
    RestProvider.prototype.getCurrentToken = function () {
        return this.currentToken;
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
    RestProvider.prototype.getTransfers = function (address, start) {
        console.log("rest service called - getTransfers");
        if (!address) {
            address = this.account.address;
        }
        if (!start) {
            start = 0;
        }
        var options = { address: address, start: start };
        return this.client.getTransfers(options);
    };
    RestProvider.prototype.getAccountByAddress = function (address) {
        console.log("rest service called - getAccountByAddress");
        if (!address) {
            address = this.account.address;
        }
        return this.client.getAccountByAddress(address);
    };
    RestProvider.prototype.getTokens = function (start) {
        console.log("rest service called - getTokens");
        var options = { start: start };
        return this.client.getTokens(options);
    };
    RestProvider.prototype.getToken = function (name) {
        console.log("rest service called - getToken");
        return this.client.getToken(name);
    };
    RestProvider.prototype.getTokenHolders = function (name) {
        console.log("rest service called - getTokenHolders");
        return this.client.getTokenHolders(name);
    };
    RestProvider.prototype.getWitnesses = function () {
        console.log("rest service called - getWitnesses");
        return this.client.getWitnesses();
    };
    RestProvider.prototype.getLatestBlock = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.getLatestBlock()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RestProvider.prototype.offlineSignSendTransaction = function (token, to, amount, latestBlock) {
        return __awaiter(this, void 0, void 0, function () {
            var pk, transaction;
            return __generator(this, function (_a) {
                pk = this.account.privateKey;
                console.log(token);
                console.log(to);
                console.log(amount);
                console.log(latestBlock);
                transaction = this.client.buildSendTransaction(token, this.account.address, to, amount * this.ONE_TRX);
                return [2 /*return*/, this.client.localSignTransaction(pk, transaction, latestBlock)];
            });
        });
    };
    RestProvider.prototype.sendTransactionHex = function (transactionHex) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.sendTransactionRaw(transactionHex)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
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
    RestProvider.prototype.participateAsset = function (address, issuerAddress, token, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var pk;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pk = this.account.privateKey;
                        return [4 /*yield*/, this.client.participateAsset(address, issuerAddress, token, amount)(pk)];
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

/***/ 131:
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
webpackEmptyAsyncContext.id = 131;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account-details/account-details.module": [
		397,
		23
	],
	"../pages/add-account/add-account.module": [
		399,
		22
	],
	"../pages/address-details/address-details.module": [
		398,
		21
	],
	"../pages/beneficiaries/beneficiaries.module": [
		400,
		20
	],
	"../pages/contact-us/contact-us.module": [
		401,
		19
	],
	"../pages/currency-convertor/currency-convertor.module": [
		402,
		18
	],
	"../pages/find-us/find-us.module": [
		403,
		17
	],
	"../pages/forgot-password/forgot-password.module": [
		404,
		16
	],
	"../pages/personal-account/personal-account.module": [
		405,
		15
	],
	"../pages/profile/profile.module": [
		406,
		14
	],
	"../pages/request/request.module": [
		407,
		13
	],
	"../pages/setting/setting.module": [
		412,
		12
	],
	"../pages/sign-in/sign-in.module": [
		408,
		11
	],
	"../pages/sign-up/sign-up.module": [
		409,
		10
	],
	"../pages/summary/summary.module": [
		410,
		9
	],
	"../pages/token-detail/token-detail.module": [
		411,
		8
	],
	"../pages/tokens/tokens.module": [
		413,
		1
	],
	"../pages/transactions-details/transactions-details.module": [
		414,
		7
	],
	"../pages/transactions/transactions.module": [
		415,
		6
	],
	"../pages/transfer/transfer.module": [
		416,
		5
	],
	"../pages/transfer2/transfer2.module": [
		417,
		4
	],
	"../pages/update-profile/update-profile.module": [
		418,
		3
	],
	"../pages/vote/vote.module": [
		420,
		0
	],
	"../pages/welcome/welcome.module": [
		419,
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
webpackAsyncContext.id = 173;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(120);
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
            { title: 'Transfer Payment 2', component: 'Transfer2Page', icon: 'banki-exchange' },
            { title: 'Transactions', component: 'TransactionsPage', icon: 'banki-exchange' },
            { title: 'Tokens', component: 'TokensPage', icon: 'banki-exchange' },
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

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(263);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_clipboard__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_qr_scanner__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tronscan_client__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tronscan_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__tronscan_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_rest_rest__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_qrcode2__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_barcode_scanner__ = __webpack_require__(236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { SecureStorage } from 'cordova-plugin-secure-storage';








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
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], config, {
                    links: [
                        { loadChildren: '../pages/account-details/account-details.module#AccountDetailsPageModule', name: 'AccountDetailsPage', segment: 'account-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/address-details/address-details.module#AddressDetailsPageModule', name: 'AddressDetailsPage', segment: 'address-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-account/add-account.module#AddAccountPageModule', name: 'AddAccountPage', segment: 'add-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/beneficiaries/beneficiaries.module#BeneficiariesPageModule', name: 'BeneficiariesPage', segment: 'beneficiaries', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-us/contact-us.module#ContactUsPageModule', name: 'ContactUsPage', segment: 'contact-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/currency-convertor/currency-convertor.module#CurrencyConvertorPageModule', name: 'CurrencyConvertorPage', segment: 'currency-convertor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/find-us/find-us.module#FindUsPageModule', name: 'FindUsPage', segment: 'find-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal-account/personal-account.module#PersonalAccountPageModule', name: 'PersonalAccountPage', segment: 'personal-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/request/request.module#RequestPageModule', name: 'RequestPage', segment: 'request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/summary/summary.module#SummaryPageModule', name: 'SummaryPage', segment: 'summary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/token-detail/token-detail.module#TokenDetailPageModule', name: 'TokenDetailPage', segment: 'token-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tokens/tokens.module#TokensPageModule', name: 'TokensPage', segment: 'tokens', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transactions-details/transactions-details.module#TransactionsDetailsPageModule', name: 'TransactionsDetailsPage', segment: 'transactions-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transactions/transactions.module#TransactionsPageModule', name: 'TransactionsPage', segment: 'transactions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transfer/transfer.module#TransferPageModule', name: 'TransferPage', segment: 'transfer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transfer2/transfer2.module#Transfer2PageModule', name: 'Transfer2Page', segment: 'transfer2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-profile/update-profile.module#UpdateProfilePageModule', name: 'UpdateProfilePage', segment: 'update-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vote/vote.module#VotePageModule', name: 'VotePage', segment: 'vote', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_clipboard__["a" /* Clipboard */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_qr_scanner__["a" /* QRScanner */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_8__tronscan_client__["Client"]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 320:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[242]);
//# sourceMappingURL=main.js.map