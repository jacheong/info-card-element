import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class InfoCardComponent implements OnInit {

  @Input() numberofpanels: number;
  panels: any[] = [];
  showNextButton: boolean;
  showPrevButton: boolean;
  activeIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.initializePanels();
    this.showNextButton = this.showNextButtonLogic();
    this.showPrevButton = this.showPrevButtonLogic();
  }

  initializePanels() {
    let p = this.numberofpanels ? this.numberofpanels : 1;
    for( let i = 0; i < p; i++ ) {
      this.panels.push(i);
    }
  }

  showNextButtonLogic() {
    return this.activeIndex !== this.panels.length - 1 && this.panels.length > 1;
  }

  showPrevButtonLogic() {
    return this.activeIndex !== 0 && this.panels.length > 1;
  }

  updateNavButtonVisibility() {
    this.showPrevButton = this.showPrevButtonLogic();
    this.showNextButton = this.showNextButtonLogic();
  }

  incrementActiveIndex() {
    if(this.activeIndex < this.panels.length) {
      this.activeIndex++;
      this.updateNavButtonVisibility();
    }
  }

  decrementActiveIndex() {
    if (this.activeIndex >= 0) {
      this.activeIndex--;
      this.updateNavButtonVisibility();
    }
  }

}
