import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './core/footer/footer.component';
import {NavbarComponent} from './core/navbar/navbar.component';
import {ContactComponent} from './contact/contact.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppComponent,
    AboutComponent,
    ExperienceComponent,
    FooterComponent,
    NavbarComponent,
    ContactComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
