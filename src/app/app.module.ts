import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoCardModule } from './info-card/info-card.module';

import { createCustomElement } from '@angular/elements';
import { InfoCardComponent } from './info-card/components/info-card/info-card.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InfoCardModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {

  constructor(
    private injector: Injector
  ) {}

  ngDoBootstrap() {
    const infoCard = createCustomElement(InfoCardComponent, { injector: this.injector });
    customElements.define('info-card', infoCard);
  }

}
