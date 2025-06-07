import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
    standalone: true,

  imports: [CommonModule,RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
closeMenu(_t5: HTMLInputElement) {
throw new Error('Method not implemented.');
}
    currentYear: number = new Date().getFullYear();


}
