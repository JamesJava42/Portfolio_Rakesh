import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-publications',
    standalone: true,

  imports: [CommonModule],
  templateUrl: './publications.html',
  styleUrl: './publications.scss'
})
export class Publications {
  publications = [
    {
      title: 'LViT: Vision Transformer for Lung Cancer Detection',
      description: 'Presented at the IEEE International Conference on Artificial Intelligence and Smart Communication (ICAISC)',
      year: '2024',
      
    },
    {
      title: 'Realtime VR Electrostatic Visualization',
      description: 'Research poster on interactive education tools in VR presented at CSUDH Innovation Showcase',
      year: '2023',
      link: ''
    }
  ];

}
