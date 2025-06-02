import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
    standalone: true,

  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
   skillCategories = [
    {
      title: 'Languages',
      items: ['Java', 'Python', 'C++', 'C#', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Frameworks & Tools',
      items: ['Angular', 'Spring Boot', 'React', 'Node.js', 'Firebase']
    },
    {
      title: 'Cloud & DevOps',
      items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions']
    },
    {
      title: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      title: 'AI & ML',
      items: ['PyTorch', 'TensorFlow', 'Hugging Face', 'Scikit-learn']
    },
    {
      title: 'Other',
      items: ['Unity', 'Blender', 'Photon Fusion', 'WebRTC']
    }
  ];

}
