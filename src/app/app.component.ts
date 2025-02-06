import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './core/footer/footer.component';
import {HeroComponent} from './hero/hero.component';
import {NavbarComponent} from './core/navbar/navbar.component';
import {ContactComponent} from './contact/contact.component';
import {ServicesComponent} from './service/services.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [AboutComponent, ExperienceComponent, FooterComponent, HeroComponent, NavbarComponent, ContactComponent, ServicesComponent]
})
export class AppComponent {
  title = 'webportfolio';
}
