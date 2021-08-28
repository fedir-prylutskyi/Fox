import {Component, Input, OnInit} from '@angular/core';
import {SliderImage} from "../../interfaces/slider-interfaces";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() images: SliderImage[] | undefined;
  @Input() imagesUrl: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
