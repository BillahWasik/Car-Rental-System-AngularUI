import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './Api/car/car.component';
import {HttpClientModule } from '@angular/common/http';
import { AddCarComponent } from './Api/add-car/add-car.component'
import { FormsModule } from '@angular/forms';
import { UpdatecarComponent } from './Api/updatecar/updatecar.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    AddCarComponent,
    UpdatecarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
