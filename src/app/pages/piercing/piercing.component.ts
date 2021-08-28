import {Component, OnDestroy, OnInit} from '@angular/core';
import {ImagesService} from "../../shared/services/images.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {SliderImage} from "../../shared/interfaces/slider-interfaces";
import {PriceList} from "../../shared/interfaces/price-interfaces";
import {PriceListService} from "../../shared/services/price-list.service";

@Component({
  selector: 'app-piercing',
  templateUrl: './piercing.component.html',
  styleUrls: ['./piercing.component.scss']
})
export class PiercingComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  images: SliderImage[] = [];
  imagesUrl = '/assets/images/piercing/';
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
    this.imagesService.getPiercingImages()
      .pipe(takeUntil(this.destroy$))
      .subscribe(images => this.images = images);
  }

  private getPriceList(): void {
    this.priceListService.getPiercingPriceList()
      .pipe(takeUntil(this.destroy$))
      .subscribe(priceLists => this.priceLists = priceLists);
  }

}
