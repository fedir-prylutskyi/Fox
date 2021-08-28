import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AppMaterialModule } from "../../common/material/app-material.module";
import { HomeRoutingModule } from './home-routing.module';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
