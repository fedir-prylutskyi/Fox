import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TattooComponent } from './tattoo.component';
import {AppMaterialModule} from "../../common/material/app-material.module";
import {SharedModule} from "../../shared/shared.module";
import {TattooRoutingModule} from "./tattoo-routing.module";



@NgModule({
  declarations: [
    TattooComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule,
    TattooRoutingModule
  ]
})
export class TattooModule { }
