import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterModule],
  template: `
    <div class="home-container">
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">¡Hola! Soy Pietro Alvarez</h1>
          <h2 class="hero-subtitle">Programador web</h2>
          <p class="hero-description">
            Nacido el 29 de Abril del año 1994 en Santiago de Chile y viviendo
            en Italia desde Octubre de 2023. Apasionado por crear soluciones
            digitales innovadoras y experiencias de usuario excepcionales.
            Especializado en tecnologías modernas como Angular, Node.js y más.
          </p>
          <div class="hero-actions">
            <p-button
              label="Ver Proyectos"
              icon="pi pi-briefcase"
              routerLink="/proyectos"
              styleClass="p-button-lg p-button-primary"
            >
            </p-button>
            <p-button
              label="Contactar"
              icon="pi pi-envelope"
              routerLink="/contacto"
              styleClass="p-button-lg p-button-outlined"
            >
            </p-button>
          </div>
        </div>
        <div class="hero-image">
          <div class="placeholder-avatar">
            <i class="pi pi-user" style="font-size: 4rem; color: #64748b;"></i>
            <p class="placeholder-text">Tu foto aquí</p>
          </div>
        </div>
      </section>

      <section class="skills-preview">
        <div class="container">
          <h3>Tecnologías Principales</h3>
          <div class="skills-grid">
            <div class="skill-card">
              <i
                class="pi pi-code"
                style="font-size: 2rem; color: #2563eb;"
              ></i>
              <h4>Frontend</h4>
              <p>Angular, React, TypeScript, HTML5, CSS3</p>
            </div>
            <div class="skill-card">
              <i
                class="pi pi-server"
                style="font-size: 2rem; color: #059669;"
              ></i>
              <h4>Backend</h4>
              <p>Node.js, Express, REST APIs, Bases de Datos</p>
            </div>
            <div class="skill-card">
              <i class="pi pi-cog" style="font-size: 2rem; color: #dc2626;"></i>
              <h4>Herramientas</h4>
              <p>Git, Docker, CI/CD, Testing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {}
