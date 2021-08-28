import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiercingComponent } from './piercing.component';
import {AppMaterialModule} from "../../common/material/app-material.module";
import {SharedModule} from "../../shared/shared.module";
import {PiercingRoutingModule} from "./piercing-routing.module";



@NgModule({
  declarations: [
    PiercingComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule,
    PiercingRoutingModule
  ]
})
export class PiercingModule { }
