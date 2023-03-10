import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { BedsEffects } from './effects/beds.effects';
import { BedsService } from './services/beds.service';
import { bedsReducer } from "./store/beds.reducer";
import { ValueArrayPipe } from './pipes/value-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ValueArrayPipe
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
