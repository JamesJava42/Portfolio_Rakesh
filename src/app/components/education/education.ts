import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
    standalone: true,

  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {
  educationList = [
    {
      degree: 'MS in Computer Science',
      institution: 'California State University, Dominguez Hills',
      year: '2023 – 2025',
      gpa: 'GPA: 3.6'
    }
  ];

}
