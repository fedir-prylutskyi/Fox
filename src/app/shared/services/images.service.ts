import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SliderImage} from "../interfaces/slider-interfaces";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private imagesUrl = '/assets/images';

  constructor(private http: HttpClient) { }

  getPiercingImages(): Observable<SliderImage[]> {
    return this.http.get<SliderImage[]>(`${this.imagesUrl}/piercing/piercing.json`);
  }

  getTattooImages(): Observable<SliderImage[]> {
    return this.http.get<SliderImage[]>(`${this.imagesUrl}/tattoo/tattoo.json`);
  }
}
