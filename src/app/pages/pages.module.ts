import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import {HomeRoutingModule} from "./home/home-routing.module";
import {HomeModule} from "./home/home.module";



@NgModule({
  declarations: [],
  imports: [
    HomeModule
  ],
  exports:[
    HomeModule
  ]
})
export class PagesModule { }
