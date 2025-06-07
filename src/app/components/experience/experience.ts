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
      'Developed web-based and VR educational tools for classroom and research applications.',
      'Taught AI/ML and programming fundamentals to high school students as part of STEM outreach.',
      'Led Agile sprints using JIRA and managed version control and collaboration via Git.',
      'Conducted unit and integration testing, and coordinated UAT cycles for academic projects.'
    ]
  },
  {
    role: 'Backend Developer',
    company: 'Vanna Infotech',
    period: 'Apr 2021 – Jul 2023',
    duties: [
      'Designed and developed scalable microservices using Spring Boot, Go, and Apache Kafka.',
      'Implemented CI/CD pipelines using Jenkins and Terraform, reducing deployment time by 40%.',
      'Integrated OAuth2, JWT, and role-based access control (RBAC) for secure backend services.',
      'Optimized performance with Redis caching and advanced SQL queries, improving throughput by 30%.',
      'Performed E2E testing in Docker containers and conducted load testing using JMeter.',
      'Used Prometheus and Grafana to enable real-time monitoring, reducing downtime by 25%.'
    ]
  }
];

}
