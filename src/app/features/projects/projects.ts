import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

interface Project {
  title: string;
  image: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  @ViewChild('track') track!: ElementRef<HTMLDivElement>;

  projects: Project[] = [
    {
      title: 'passio',
      image: 'images/passio.png',
      description:
        `Full-stack transport payment and management platform built for a real transport
         association — admin, cashier, and driver portals with Firebase/Firestore, solving
         real concurrency problems like double-booking prevention and bus rotation queuing
         using NgRx transaction patterns.`,
      tags: ['Angular', 'TypeScript', 'RxJS', 'TailwindCSS' ,'Firebase/Firestore', 'PrimeNG'],
      liveUrl: 'https://passio-staging.web.app/customer/home',
      githubUrl: 'https://github.com/Yussif-bash/passio_frontend',
    },
    {
      title: 'Online Barber Shop',
      image: 'images/online-barber-shop.png',
      description:
        'Built a full-featured online barber shop platform with Angular, enabling users to browse services, book appointments, and interact with a dynamic UI. Leveraged Angular Signals and RxJS for efficient state management and smooth performance.',
      tags: ['Angular', 'TypeScript', 'RxJS', 'TailwindCSS','Firebase'],
      liveUrl: 'https://online-barbershop-project-1.netlify.app/',
      githubUrl: 'https://github.com/Alaska-gh/online-barber-shop-project',
    },
    {
      title: 'Arahadeals Featured Products',
      image: 'images/featured-product.png',
      description:
        'Developed dynamic product display and state management using Angular Signals, improving UI responsiveness and performance.',
      tags: ['Angular', 'TypeScript', 'RxJS', 'TailwindCSS'],
      liveUrl: 'https://arahadeals.com',
      githubUrl: 'https://github.com/NICS-Solutions/arahadeals_frontend/pull/293',
    },
    {
      title: 'Arahadeals Admin Activity Log',
      image: 'images/admin-activity-log.png',
      description:
        'Developed a real-time admin activity log feature using Angular Signals to track user and system actions efficiently. Enhanced UI responsiveness and performance, while building reusable and scalable components for improved administrative oversight.',
      tags: ['Angular', 'TypeScript', 'RxJS', 'TailwindCSS'],
      liveUrl: 'https://arahadeals.com',
      githubUrl: 'https://github.com/NICS-Solutions/arahadeals_frontend/pull/293',
    } 
  ];

  scrollByCard(direction: 1 | -1) {
    const el = this.track.nativeElement;
    const cardWidth = el.querySelector('.project-card')?.clientWidth ?? 300;
    el.scrollBy({ left: direction * (cardWidth + 24), behavior: 'smooth' });
  }
}