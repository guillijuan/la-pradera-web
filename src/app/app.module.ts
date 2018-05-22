import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { GallosComponent } from './gallos/gallos.component';
import { ProduccionComponent } from './produccion/produccion.component';

import { AnimalesModule } from './animales/animales.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GallosComponent,
    ProduccionComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AnimalesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
