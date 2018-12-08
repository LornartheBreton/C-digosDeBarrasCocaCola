import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { SQLite } from '@ionic-native/sqlite';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LenovoPage } from '../pages/lenovo/lenovo';
import { SystemsPage } from '../pages/systems/systems';
import { SpecsPage } from '../pages/specs/specs';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DataProvider } from '../providers/data/data';
import { IonicStorageModule } from '@ionic/storage'; 
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { TasksServiceProvider } from '../providers/tasks-service/tasks-service';
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
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
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
    DataProvider,
    SQLite,
    TasksServiceProvider,    
    HttpClient,    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TasksServiceProvider,
    
  ]
})
export class AppModule {}
