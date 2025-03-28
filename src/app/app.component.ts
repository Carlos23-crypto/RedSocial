import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Para usar [(ngModel)]
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PracticaRedSocioal';
}
