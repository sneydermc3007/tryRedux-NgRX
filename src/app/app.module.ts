import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store/src';
import { EffectsModule } from '@ngrx/effects/src';
import { HttpClientModule } from '@angular/common/http';
import { BedsEffects } from './effects/beds.effects';
import { BedsService } from './services/beds.service';
import { bedsReducer } from "./store/beds.reducer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({beds: bedsReducer}),
    EffectsModule.forRoot([BedsEffects])
  ],
  providers: [BedsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
