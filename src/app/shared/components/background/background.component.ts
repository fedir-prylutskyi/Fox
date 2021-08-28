import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  imageSrc = 'assets/images/background2.jpeg';

  constructor() { }

  ngOnInit(): void {
  }

}
