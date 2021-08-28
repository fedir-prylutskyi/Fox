import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {faInstagram, faTelegram, faViber} from "@fortawesome/free-brands-svg-icons";
import {DeviceService} from "../../services/device.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  @Input() sidenav: MatSidenav | undefined;
  viberIcon = faViber;
  telegramIcon = faTelegram;
  instagramIcon = faInstagram;
  isMobile = false;


  constructor(private deviceService: DeviceService) {
    this.deviceService.isMobile$
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => this.isMobile = value);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  openSidenav(): void {
    this.sidenav?.toggle();
  }

}
