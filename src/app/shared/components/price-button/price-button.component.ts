import {Component, Input, OnInit} from '@angular/core';
import {PriceListComponent} from "../price-list/price-list.component";
import {MatDialog} from "@angular/material/dialog";
import {PriceList} from "../../interfaces/price-interfaces";

@Component({
  selector: 'app-price-button',
  templateUrl: './price-button.component.html',
  styleUrls: ['./price-button.component.scss']
})
export class PriceButtonComponent implements OnInit {
  @Input() priceLists: PriceList[] = [];
  @Input() title = '';

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openPriceList(): void {
    this.dialog.open(PriceListComponent, {
      width: '1600px',
      autoFocus: false,
      data: {
        title: this.title,
        priceLists: this.priceLists
      }
    });
  }

}
