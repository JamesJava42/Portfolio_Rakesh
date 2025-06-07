import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,

  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
   downloadResume() {
      const link = document.createElement('a');
      link.href = 'assets/Rakesh_Reddy_M.pdf';
      link.download = 'Rakesh_Reddy_Mareddy.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

}
