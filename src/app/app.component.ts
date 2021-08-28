import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import SwiperCore, {Autoplay, EffectCoverflow, Mousewheel, Navigation, Pagination} from "swiper";
import {DeviceService} from "./shared/services/device.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Mousewheel, Autoplay]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  title = 'Storm Tattoo';
  isMobile = false;

  @HostListener('window:resize', ['$event'])
  private chooseDevice(event?: Event, init = false) {
    if (window.innerWidth <= 790 && !this.isMobile) {
      this.deviceService.isMobile$.next(true);
    } else if (window.innerWidth > 790 && this.isMobile) {
      this.deviceService.isMobile$.next(false);
    } else if (init) {
      this.deviceService.isMobile$.next(false);
    }
  }

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private deviceService: DeviceService
  ) {
    this.matIconRegistry.addSvgIcon(
      'tattoo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/tattoo-machine.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'piercing',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/piercing.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'home',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/home.svg')
    );
  }

  ngOnInit(): void {
    this.chooseDevice(undefined, true);
    this.deviceService.isMobile$
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => (this.isMobile = value));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
