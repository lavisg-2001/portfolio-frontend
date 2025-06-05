import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { ExperienceComponent } from '../components/experience/experience.component';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
    selector: 'app-portfolio',
    imports: [CommonModule, FormsModule, ExperienceComponent],
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css'],
    providers: [PortfolioService],
    animations: [
      trigger('fadeIn', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('500ms ease-in', style({ opacity: 1 }))
        ]),
        transition(':leave', [
          animate('500ms ease-out', style({ opacity: 0 }))
        ])
      ]),
      trigger('slideIn', [
        transition(':enter', [
          style({ transform: 'translateY(20px)', opacity: 0 }),
          animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
        ])
      ])
    ]
})
export class PortfolioComponent implements OnInit {

  // Skills Data
  skills = [
    { name: 'Java', level: 8 },
    { name: 'Python', level: 6 },
    { name: 'Spring Boot', level: 8 },
    { name: 'Kafka', level: 7 },
    { name: 'SQL', level: 8 },
    { name: 'MongoDB', level: 7 },
    { name: 'HTML & CSS', level: 7 },
    { name: 'Git/GitHub', level: 8 }
  ];

  firstHalfSkills: any[] = [];
  secondHalfSkills: any[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.splitSkills(); // Call splitSkills to initialize the skill halves
  }

  splitSkills() {
    const midIndex = Math.ceil(this.skills.length / 2);
    this.firstHalfSkills = this.skills.slice(0, midIndex);
    this.secondHalfSkills = this.skills.slice(midIndex);
  }
  
  // Course Certificates
  courseCertificates = [
    { name: 'Java Spring Framework 6 with Spring Boot 3', file: 'Java_SpringBoot_Udemy.pdf' },
    { name: 'IBM SkillsBuild Innovation Camp - Data Analysis', file: 'IBM_SkillsBuild_Innovation_Camp.pdf' },
    { name: 'Data Visualization with Python', file: 'Data Visualization with Python.pdf' },
    { name: 'Docker for Java Developer', file: 'Docker-Udemy.pdf' },
    { name: 'Git for Beginners', file: 'Git Certificate.pdf' }
  ];

  showCourseCertificates = false;
  selectedCourseCertificate = '';

  toggleCourseCertificates() {
    this.showCourseCertificates = !this.showCourseCertificates;
  }

  viewSelectedCourseCertificate(file: string) {
    if (file) {
      window.open(`assets/${file}`, '_blank');
    }
  }

  // Internship Certificates
  internshipCertificates = [
    { name: 'Infometh Solutions Pvt. Ltd.', file: 'InfomethInternship_.pdf' },
    { name: 'Shaurya Technosoft Pvt. Ltd.', file: 'Shaurya Internship.pdf' }
  ];

  showInternshipCertificates = false;
  selectedInternshipCertificate = '';

  toggleInternshipCertificates() {
    this.showInternshipCertificates = !this.showInternshipCertificates;
  }
  
  viewSelectedInternshipCertificate(file: string) {
    if (file) {
      window.open(`assets/${file}`, '_blank');
    }
  }
  

  // Resume Methods
  viewResume() {
    window.open('assets/Resume_Portfolio.pdf', '_blank');
  }

  downloadResume() {
    const resumeUrl = 'assets/Resume_SD1.pdf';
    const anchor = document.createElement('a');
    anchor.href = resumeUrl;
    anchor.download = 'Lavanya_Gollapelli_Resume.pdf';
    anchor.click();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }  

}
