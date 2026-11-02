import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

interface ContactItem {
  label: string;
  icon: string;
  href?: string;
  external?: boolean;
  tooltip: string;
}

interface LanguageItem {
  label: string;
}

interface Job {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

interface Education {
  school: string;
  degree: string;
  period: string;
}

@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly name = 'Yi Fei Chen';
  protected readonly title = 'Software Developer';

  protected readonly contact: ContactItem[] = [
    {
      label: 'Email',
      icon: 'email',
      href: 'mailto:yifeichen92@gmail.com',
      tooltip: 'Send an email'
    },
    {
      label: 'GitHub',
      icon: 'code',
      href: 'https://github.com/yifeichen',
      external: true,
      tooltip: 'View GitHub profile'
    },
    {
      label: '(226) 750-8292',
      icon: 'phone',
      href: 'tel:+12267508292',
      tooltip: 'Call'
    },
    {
      label: 'Longueuil, Quebec',
      icon: 'location_on',
      tooltip: 'Location'
    }
  ];

  protected readonly programmingSkills: string[] = [
    'Develop scalable, maintainable, object-oriented backend software using C++, Java, and Python.',
    'Design and develop real-time embedded software in C for ARM microcontrollers.',
    'Design, develop, and integrate RESTful APIs and backend services.',
    'Develop full-stack web applications using Angular, Grails/Groovy, and GORM, an ORM built on Hibernate, with SQL databases.',
    'Develop, debug, and deploy applications in Linux environments using shell scripting and system utilities.',
    'Develop and maintain automated testing frameworks to improve software quality and reliability.',
    'Develop and maintain secure over-the-air (OTA) firmware update systems for internet-connected embedded devices.'
  ];

  protected readonly practices: string[] = [
    'Practice Agile/Scrum with Jira and Confluence for project tracking, sprint planning, and documentation.',
    'Use Git for version control and Jenkins for CI/CD pipelines.'
  ];

  protected readonly languages: LanguageItem[] = [
    { label: 'English' },
    { label: 'French' },
    { label: 'Chinese' }
  ];

  protected readonly jobs: Job[] = [
    {
      role: 'Software Developer',
      company: 'Gigrow',
      location: 'Montreal, QC',
      period: 'February 2020 – Present',
      bullets: [
        'Design, develop, and maintain a Python backend server on embedded devices and expose RESTful APIs for remote IoT monitoring.',
        'Develop embedded applications in C for high-frequency sensor data acquisition, monitoring, and fault detection.',
        'Maintain and enhance real-time embedded software running on ARM-based microcontrollers with JTAG-based debugging.',
        'Develop unit tests and maintain automated build and continuous integration pipelines using Jenkins.',
        'Collaborate with hardware engineers to integrate and validate new sensors and embedded hardware.'
      ]
    }
  ];

  protected readonly internships: Job[] = [
    {
      role: 'Software Developer',
      company: 'RSVP Tech',
      location: 'Waterloo, ON',
      period: 'September – December 2016',
      bullets: [
        'Debugged and resolved backend issues in Java applications.',
        'Developed Android application prototypes for new product features.'
      ]
    },
    {
      role: 'Software Developer',
      company: 'AppZero',
      location: 'Ottawa, ON',
      period: 'January – April 2016',
      bullets: [
        'Debugged and resolved issues in a C++ desktop application.',
        'Implemented user interface enhancements to improve usability.'
      ]
    }
  ];

  protected readonly education: Education[] = [
    {
      school: 'University of Waterloo',
      degree: 'Master of Applied Science in Electrical and Computer Engineering',
      period: '2017 – 2019'
    },
    {
      school: 'University of Waterloo',
      degree: 'Bachelor of Software Engineering, Honours Co-op',
      period: '2012 – 2017'
    }
  ];
}
