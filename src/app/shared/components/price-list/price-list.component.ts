import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {PriceDialogData} from "../../interfaces/price-interfaces";

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: PriceDialogData) { }

  ngOnInit(): void {
  }

}
