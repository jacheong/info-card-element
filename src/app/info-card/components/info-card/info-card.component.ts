import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class InfoCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
