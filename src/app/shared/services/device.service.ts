import { Injectable } from '@angular/core';
import {ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  isMobile$ = new ReplaySubject<boolean>(1);

  constructor() { }
}
