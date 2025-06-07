import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
   projectList = [
  {
    title: 'Scalable Online Shopping System (E-Commerce Platform)',
    description: "Designed and implemented a secure and scalable e-commerce backend using microservices. Integrated OAuth2 for user authentication and RBAC. Deployed services on AWS EC2 with ELB and RDS, used S3 for asset storage, and monitored infrastructure with CloudWatch. Automated CI/CD using Jenkins and Bitbucket Pipelines, with container orchestration via Docker and Kubernetes.",
    tech: ['Java', 'Spring Boot', 'OAuth2', 'AWS (EC2, RDS, S3, CloudWatch)', 'Docker', 'Kubernetes', 'Jenkins'],
    link: 'https://github.com/JamesJava42'
  },
  {
    title: 'VR Educational Simulation (Electromagnetism Learning)',
    description: "Built an immersive VR application to simulate electric field interactions using Unity and C# for Meta Quest 2. Implemented dynamic electrostatic field grids and real-time user interaction features. Integrated VR UI with XR Toolkit, enabling intuitive control, field visualization, and prefab-based object spawning for educational experiences.",
    tech: ['Unity', 'C#', 'VR', 'XR Toolkit', 'Meta Quest 2'],
    link: 'https://github.com/JamesJava42'
  },
  {
    title: 'Real-Time Stock Control System (Inventory Management)',
    description: "Engineered a real-time inventory system using Spring Boot microservices, Kafka for event-driven communication, and Docker for containerization. Integrated JWT and RBAC for secure access control. Optimized performance with Redis caching and Spring Data JPA, enabling low-latency stock updates and seamless inter-service API communication.",
    tech: ['Spring Boot', 'Apache Kafka', 'Docker', 'JWT', 'Redis', 'Spring Data JPA'],
    link: 'https://github.com/JamesJava42'
  }
];

}
