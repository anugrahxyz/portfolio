import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [
    NgForOf
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  standalone: true
})
export class ServicesComponent {
  services = [
    {
      title: 'Web Application Development',
      description: 'Building modern web apps with Angular, React, and more.',
      icon: 'web' // or a path to an icon
    },
    {
      title: 'Mobile App Development',
      description: 'Creating cross-platform apps with Flutter.',
      icon: 'phone_iphone'
    },
    {
      title: 'API & Backend Services',
      description: 'Developing robust Java Spring Boot or Node.js backends.',
      icon: 'cloud'
    }
  ];
}
