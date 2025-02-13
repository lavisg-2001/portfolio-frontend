import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    imports: [CommonModule],
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  expandedIndex: number | null = null;

  experiences = [
    {
      company: 'Manuh Global Technologies Pvt. Ltd.',
      role: '🚀 Associate Data Engineer',
      period: '📅 10/2023 - 01/2025',
      details: [
        'Designed and developed enterprise-level RESTful APIs using Spring Boot with JWT authentication.',
        'Developed JUnit test cases with Mockito for reliable code quality.',
        'Deployed microservices on Amazon EKS using CI/CD pipelines.',
        'Built near real-time data pipeline with Kafka and MongoDB.',
        'Implemented data ingestion pipelines with IBM Infosphere and Informatica.',
        'Followed Agile methodologies and debugging best practices.'
      ]
    },
    {
      company: 'Infometh Solutions Private Limited',
      role: '🎓 Intern',
      period: '📅 04/2023 - 09/2023',
      details: [
        'Developed a Restaurant Management System using Java, Spring Boot, Angular, and MySQL.',
        'Implemented features like inventory management, order processing, and employee scheduling.'
      ]
    },
    {
      company: 'Shaurya Technosoft Private Limited',
      role: '🎓 Intern',
      period: '📅 01/2022 - 03/2022',
      details: [
        'Developed an Employee Management System using .NET, C#, and MySQL.',
        'Managed employee data efficiently with CRUD operations.'
      ]
    }
  ];

  toggleDetails(index: number): void {
    // Toggle logic: Close if clicked again, open if different index
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
