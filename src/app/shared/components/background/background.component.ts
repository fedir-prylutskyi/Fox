import {Component, OnDestroy, OnInit} from '@angular/core';
import {DeviceService} from "../../services/device.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  imageSrc = 'assets/images/background2.jpeg';
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

}
