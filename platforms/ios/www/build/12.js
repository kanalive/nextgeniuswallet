webpackJsonp([12],{

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = /** @class */ (function () {
    function ProfilePage(camera, navCtrl, navParams, modalCtrl, restProvider) {
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.restProvider = restProvider;
        // change Image
        this.base64Image = 'assets/img/kana.jpeg';
    }
    // call address details modal
    ProfilePage.prototype.callModal = function () {
        var modal = this.modalCtrl.create('UpdateProfilePage');
        modal.present();
    };
    ProfilePage.prototype.accessGallery = function () {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    ProfilePage.prototype.createNewAccount = function () {
        //this.restProvider.createNewAccount();
    };
    // logOut Function
    ProfilePage.prototype.logOut = function () {
        this.navCtrl.setRoot('WelcomePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/wli3/Projects/nextgeniuswallet/src/pages/profile/profile.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start >\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Profile</ion-title>\n    <ion-buttons end >\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="ios-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="profile">\n    <div class="imgBg" [ngStyle]="{\'background-image\':\'url(\' + base64Image + \')\'}">\n      <ion-icon name="ios-camera"  (click)="accessGallery()"></ion-icon>\n    </div>\n    <h4>Karina Li</h4>\n     <p>\n      <ion-icon name="ios-pin"></ion-icon>\n      Sydney\n    </p>\n    <div class="appForm">\n      <ion-list>\n        <!-- ============ Name ============== -->\n        <button  block ion-item>\n          <ion-icon item-left name="md-contact"></ion-icon>\n          Wen Karina Li\n        </button>\n        <!-- ============== Location =============== -->\n        <button  block ion-item >\n          <ion-icon item-left name="ios-pin"></ion-icon>\n          Sydney\n        </button>\n         <!-- ============== Telephone Number =============== -->\n        <button  block ion-item>\n          <ion-icon item-left name="ios-call"></ion-icon>\n          12345343543\n        </button>\n         <!-- ============== Email =============== -->\n        <button  block ion-item >\n          <ion-icon item-left name="ios-mail"></ion-icon>\n          wen.k.li@outlook.com\n        </button>\n        <div *ngIf="restProvider.account">\n            <!-- ============== address =============== -->\n            <button  block ion-item >\n            <ion-icon item-left name="ios-home"></ion-icon>\n            {{restProvider.account.address}}\n            </button>\n            <!-- ============== privateKey =============== -->\n            <button  block ion-item >\n            <ion-icon item-left name="md-key"></ion-icon>\n            {{restProvider.account.privateKey}}\n          </button>\n        </div>\n        <div *ngIf="!restProvider.account">\n            <button ion-button block color="color2" (click)="createNewAccount()">Create New Account</button>\n        </div>\n        \n      </ion-list>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <button ion-button block color="color2" (click)="callModal()">Update</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/wli3/Projects/nextgeniuswallet/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=12.js.map