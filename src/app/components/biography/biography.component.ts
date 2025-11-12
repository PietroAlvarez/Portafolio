import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-biography',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="biography-container">
      <div class="container">
        <h1>Sobre Mí</h1>
        <div class="bio-content">
          <div class="bio-text">
            <p>
              Aquí puedes escribir tu biografía personal y profesional. 
              Cuenta tu historia, tus pasiones, tu formación académica y tu experiencia laboral.
            </p>
            <p>
              Puedes incluir información sobre tus objetivos profesionales, 
              tus hobbies, y todo lo que consideres relevante para que las 
              personas te conozcan mejor.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent {}