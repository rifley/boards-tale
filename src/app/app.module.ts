import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CovalentCoreModule } from '@covalent/core';
import { AppComponent } from './app.component';
import { NewPlayerStartComponent } from './new-player-start/new-player-start.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { HelpComponent } from './help/help.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {TilesService} from './tiles.service';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    NewPlayerStartComponent,
    IntroductionComponent,
    HelpComponent
  ],
  imports: [
    CovalentCoreModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [TilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
