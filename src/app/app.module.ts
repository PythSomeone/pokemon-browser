import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainListComponent} from './main-list/main-list.component';
import {MaterialModule} from './material.module';
import {PokeapiService} from './services/poke-api-service';
import {HttpClientModule} from "@angular/common/http";
import {FlexModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {CdkScrollable, CdkVirtualScrollViewport, ScrollingModule} from "@angular/cdk/scrolling";

@NgModule({
  declarations: [
    AppComponent,
    MainListComponent
  ],
    imports: [
        BrowserModule,
        MaterialModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FlexModule,
        FormsModule,
        ScrollingModule,
    ],
  providers: [
    PokeapiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
