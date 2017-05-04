import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { PostPage } from '../pages/post/post'
import { TabsPage } from '../pages/tabs/tabs';
import { Data } from '../providers/data';
import { AngularFireModule} from 'angularfire2';
import { ConnectionComponent } from '../components/connection/connection';

const config = {
    apiKey: "AIzaSyA2KT86Dku9q9aVrE4FPnSi4ZHL7E3TO0Q",
    authDomain: "feed-ac8d4.firebaseapp.com",
    databaseURL: "https://feed-ac8d4.firebaseio.com",
    storageBucket: "feed-ac8d4.appspot.com",
    messagingSenderId: "216567450475"
  };


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PostPage,
    TabsPage,
    ConnectionComponent
  ],

  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PostPage,
    TabsPage
    
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Data ]
})
export class AppModule {}
