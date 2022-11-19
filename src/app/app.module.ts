import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormuComponent } from './Component/formu/formu.component';
import { ShapesComponent } from './Component/shapes/shapes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormuComponent,
    ShapesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
