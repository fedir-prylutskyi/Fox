import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PriceList} from "../interfaces/price-interfaces";

@Injectable({
  providedIn: 'root'
})
export class PriceListService {
  private priceListsUrl = '/assets/price';

  constructor(private http: HttpClient) { }

  getPiercingPriceList(): Observable<PriceList[]> {
    return this.http.get<PriceList[]>(`${this.priceListsUrl}/piercing.json`);
  }

  getTattooPriceList(): Observable<PriceList[]> {
    return this.http.get<PriceList[]>(`${this.priceListsUrl}/tattoo.json`);
  }
}
