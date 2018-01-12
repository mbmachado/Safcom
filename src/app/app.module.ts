import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { RestfulProvider } from '@ioniczoo/pigeon-restful-provider';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
// import { SocialSharing } from '@ionic-native/social-sharing';
// import { BrowserTab } from '@ionic-native/browser-tab';
// import { BrPatnProvider } from '../providers/br-patn/br-patn';
// import { DirectivesModule } from '../directives/directives.module'


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    // DirectivesModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      swipeBackEnabled: true,
      preloadModules: false
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RestfulProvider,
    // SocialSharing,
    // BrowserTab,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    // BrPatnProvider
  ]
})
export class AppModule { }
