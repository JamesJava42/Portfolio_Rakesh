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
      title: 'AI Dataset Trainer & Inference System',
      description: 'Built a transformer-based sentiment analysis system using PyTorch and Hugging Face. Deployed with a Flask API.',
      tech: ['Python', 'PyTorch', 'Flask'],
      link: 'https://github.com/JamesJava42'
    },
    {
      title: 'VR Educational Simulation',
      description: 'Developed an interactive VR app for learning electromagnetism using Unity and C# for Meta Quest 2.',
      tech: ['Unity', 'C#', 'VR'],
      link: 'https://github.com/JamesJava42'
    },
    {
      title: 'Real-Time Stock Control System',
      description: 'Microservices app using Spring Boot, Kafka, and Docker with JWT and role-based security.',
      tech: ['Spring Boot', 'Kafka', 'Docker'],
      link: 'https://github.com/JamesJava42'
    }
  ];

}
