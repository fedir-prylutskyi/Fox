import {Component, OnDestroy, OnInit} from '@angular/core';
import {SliderImage} from "../../shared/interfaces/slider-interfaces";
import {Subject} from "rxjs";
import {ImagesService} from "../../shared/services/images.service";
import {takeUntil} from "rxjs/operators";
import {PriceList} from "../../shared/interfaces/price-interfaces";
import {PriceListService} from "../../shared/services/price-list.service";

@Component({
  selector: 'app-tattoo',
  templateUrl: './tattoo.component.html',
  styleUrls: ['./tattoo.component.scss']
})
export class TattooComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  images: SliderImage[] = [];
  imagesUrl = '/assets/images/tattoo/';
  priceLists: PriceList[] = [];

  constructor(private imagesService: ImagesService,
              private priceListService: PriceListService) { }

  ngOnInit(): void {
    this.getImages();
    this.getPriceList();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getImages(): void {
    this.imagesService.getTattooImages()
      .pipe(takeUntil(this.destroy$))
      .subscribe(images => this.images = images);
  }

  private getPriceList(): void {
    this.priceListService.getTattooPriceList()
      .pipe(takeUntil(this.destroy$))
      .subscribe(priceLists => this.priceLists = priceLists);
  }

}
