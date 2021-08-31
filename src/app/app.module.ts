import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AeroComponent } from './aero/aero.component';
import { RailwayComponent } from './railway/railway.component';

@NgModule({
  declarations: [
    AppComponent,
    AeroComponent,
    RailwayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
