import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './Component/header/header.component';
import { FormuComponent } from './Component/formu/formu.component';
import { ShapesComponent } from './Component/shapes/shapes.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FormuComponent,
    ShapesComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
      FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
