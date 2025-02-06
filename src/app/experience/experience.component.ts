import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

interface Experience {
  companyName: string;
  position: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      companyName: 'PT Asuransi Kredit Indonesia (Askrindo)',
      position: 'Software Engineer',
      period: 'Jan 2022 - Present',
      location: 'Jakarta Pusat, Indonesia',
      description: [
        'Leading tasks as a person-in-charge',
        'Developing internal & external apps',
        'Handling multiple workflows & product cases',
        'Deploying production apps manually & with automation',
        'Utilizing AngularJS, Java Spring Boot, ReactJS, PHP',
        'Applying AI to generate test cases'
      ],
      skills: ['Spring Boot', 'AngularJS', 'ReactJS', 'PHP', 'AI-driven Testing']
    },
    {
      companyName: 'Enigma Camp',
      position: 'IT Trainee Bootcamp',
      period: 'Sep 2021 - Jan 2024',
      location: 'On-site',
      description: [
        'Learning Java Spring Boot',
        'Enigma Bank project (JWT Auth, Email Verification, Transactional Table, Swagger)',
        'Learning Angular TS (Front End)',
        'Developing Angular Web App with Web Storage, API, SPA, Bootstrap',
        'Learning Android Native (Kotlin)'
      ],
      skills: ['Spring Boot', 'Angular', 'Kotlin', 'JWT', 'Swagger']
    },
    {
      companyName: 'Freelance (Self employed)',
      position: 'Freelance Backend & DevOps',
      period: 'Oct 2021 - Dec 2021',
      location: 'Jakarta Raya, Indonesia',
      description: [
        'Designed backend architecture & DB',
        'Developed core features with Java Spring Boot',
        'Coordinated with Front End for API design',
        'Managed API security & deployment'
      ],
      skills: ['Java Spring Boot', 'REST APIs', 'PostgreSQL', 'Git', 'Security']
    },{
      companyName: 'Freelance Project',
      position: 'Flutter Developer',
      period: 'Feb 2023 - Mar 2023', // or whatever timeline
      location: 'Remote',
      description: [
        'Developed a Google Classroom clone named Liberika Classroom using Flutter.',
        'Implemented user authentication, real-time messaging, and classroom management features.',
        'Collaborated with a small team to design the UI and integrate Firebase backend.'
      ],
      skills: ['Flutter', 'Dart', 'Firebase', 'UI/UX']
    }

  ];
}
