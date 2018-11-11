import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LenovoPage } from '../pages/lenovo/lenovo';
import { SystemsPage } from '../pages/systems/systems';
import { SpecsPage } from '../pages/specs/specs';
import { InAppBrowser } from '@ionic-native/in-app-browser';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LenovoPage,
    SystemsPage,
    SpecsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LenovoPage,
    SystemsPage,
    SpecsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
