import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
    standalone: true,

  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
 experiences = [
    {
      role: 'Technical Developer',
      company: 'California State University, Dominguez Hills',
      period: 'Sep 2023 – Present',
      duties: [
        'Built internal VR research tools and educational simulations.',
        'Taught AI and programming fundamentals to K-12 students.',
        'Managed agile sprints, QA cycles, and version control using Git & JIRA.'
      ]
    },
    {
      role: 'Backend Developer',
      company: 'Vanna Infotech',
      period: 'Apr 2021 – Jul 2023',
      duties: [
        'Developed secure and scalable microservices with Spring Boot and Go.',
        'Implemented CI/CD pipelines and integrated Docker, Terraform, and Jenkins.',
        'Enhanced performance with advanced SQL queries and Redis caching.'
      ]
    }
  ];
}
