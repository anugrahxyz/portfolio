import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  standalone: true,
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  name = 'Anugrah Zeputra';
  title = 'Software Engineer';
  location = 'Jakarta Raya, Indonesia';
  description = `Graduated from Brawijaya University in Computer Engineering (2022).\nDuring college, realized gap between industry & academia, leading to skill up in Enigma Camp & eventually Askrindo.`;
}
