import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-biography",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="biography-container">
      <div class="container">
        <h1>Sobre Mí</h1>
        <div class="bio-content">
          <div class="bio-text">
            <p>
              Mi nombre es Pietro Alvarez. Nací el 29 de Abril del año 1994 en
              Santiago de Chile y actualmente vivo en Italia desde Octubre de
              2023. Soy programador web con experiencia en desarrollo de
              plataformas de pagos, cursos y estudiantes, así como en la
              creación de sitios web para empresas y turismo.
            </p>
            <p>
              Puedes incluir información sobre tus objetivos profesionales, tus
              hobbies, y todo lo que consideres relevante para que las personas
              te conozcan mejor.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./biography.component.scss"],
})
export class BiographyComponent {}
