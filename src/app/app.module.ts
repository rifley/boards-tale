import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CovalentCoreModule } from '@covalent/core';
import { AppComponent } from './app.component';
import { NewPlayerStartComponent } from './new-player-start/new-player-start.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPlayerStartComponent
  ],
  imports: [
    CovalentCoreModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
