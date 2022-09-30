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
import {ScrollingModule} from "@angular/cdk/scrolling";
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import {ColorSchemeService} from "./services/color-scheme.service";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations:[
    AppComponent,
    MainListComponent,
    PokemonDetailsComponent,
    HomeComponent,
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
    ColorSchemeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
