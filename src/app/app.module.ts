import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { HttpClientModule } from '@angular/common/http';
import { Clipboard } from '@ionic-native/clipboard';
import { IonicStorageModule, Storage } from '@ionic/storage';
//import { SecureStorage } from 'cordova-plugin-secure-storage';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { Client } from "@tronscan/client";
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { SearchPipe } from '../pipes/search/search';
import QRCode from 'qrcode'
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
var config = {
      backButtonText: '',
      backButtonIcon: 'ios-arrow-round-back',
      iconMode: 'ios',
      mode:'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      pageTransition: 'ios',
    };
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxQRCodeModule,
    IonicModule.forRoot(MyApp,config),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    BarcodeScanner,
    Clipboard,
    QRScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    Client
  ]
})
export class AppModule {}

