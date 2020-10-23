import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {CoreModule} from "./core/core.module";

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
