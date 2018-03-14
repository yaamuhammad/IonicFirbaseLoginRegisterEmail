import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UserProvider } from '../providers/user/user';

// Import library firbease
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

// import file configurasi yang kita biuat tadi
import { config } from './app.firebaseconfig';
import { AuthProvider } from '../providers/auth/auth';


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),

        // tambahkan module di sini
        AngularFireModule.initializeApp(config)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {
            provide: ErrorHandler,
            useClass: IonicErrorHandler
        },
        UserProvider,
        //tambahkan auth provider & AngularFireDatabase di sini
        AngularFireAuth,
        AngularFireDatabase,
    AuthProvider
    ]
})
export class AppModule {}


