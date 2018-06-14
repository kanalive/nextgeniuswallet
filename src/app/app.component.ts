import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'WelcomePage';

  pages: Array<{title: string, component: any,icon:any}>;
  public animateVarible:boolean=false;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public restProvider: RestProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Summary', component: 'SummaryPage',icon:'banki-summary' },
      { title: 'Request Payment', component: 'RequestPage',icon:'banki-transfer' },
      { title: 'Transfer Payment', component: 'TransferPage',icon:'banki-exchange' },
      { title: 'Transfer Payment 2', component: 'Transfer2Page',icon:'banki-exchange' },
      { title: 'Transactions', component: 'TransactionsPage',icon:'banki-exchange' },
      { title: 'Tokens', component: 'TokensPage',icon:'banki-exchange' },
      { title: 'Votes', component: 'VotePage',icon:'banki-converter' },
      { title: 'Contact us', component: 'ContactUsPage',icon:'banki-phone' },

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.restProvider.loadAccountFromLocalSql();
    });
  }

  

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page);
  }
}
