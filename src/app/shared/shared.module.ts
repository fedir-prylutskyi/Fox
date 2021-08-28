import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AppMaterialModule } from "../common/material/app-material.module";
import { BackgroundComponent } from './components/background/background.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {SwiperModule} from 'swiper/angular';
import { SliderComponent } from './components/slider/slider.component';
import { PriceListComponent } from './components/price-list/price-list.component';
import { PriceButtonComponent } from './components/price-button/price-button.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BackgroundComponent,
    SidenavComponent,
    SliderComponent,
    PriceListComponent,
    PriceButtonComponent
  ],
    exports: [
        HeaderComponent,
        BackgroundComponent,
        SidenavComponent,
        SwiperModule,
        SliderComponent,
        PriceButtonComponent
    ],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule,
    SwiperModule
  ]
})
export class SharedModule { }
