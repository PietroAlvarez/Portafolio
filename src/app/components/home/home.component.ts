import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { RouterModule } from "@angular/router";
import { TranslationService } from "../../services/translation.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterModule],
  template: `
    <div class="home-container">
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">{{ t("home.greeting") }}</h1>
          <h2 class="hero-subtitle">{{ t("home.title") }}</h2>
          <p class="hero-description">
            {{ t("home.description") }}
          </p>
          <div class="hero-actions">
            <p-button
              [label]="t('home.viewProjects')"
              icon="pi pi-briefcase"
              routerLink="/proyectos"
              styleClass="p-button-lg p-button-primary"
            >
            </p-button>
            <p-button
              [label]="t('home.downloadCV')"
              icon="pi pi-download"
              (onClick)="downloadCV()"
              styleClass="p-button-lg p-button-success"
            >
            </p-button>
            <p-button
              [label]="t('home.contact')"
              icon="pi pi-envelope"
              routerLink="/contacto"
              styleClass="p-button-lg p-button-outlined"
            >
            </p-button>
          </div>
        </div>
        <div class="hero-image">
          <div class="avatar-container">
            <div class="avatar-wrapper">
              <div class="avatar-circle">
                <i class="pi pi-user"></i>
              </div>
              <div class="avatar-glow"></div>
            </div>
            <p class="avatar-caption">Pietro Alvarez</p>
          </div>
        </div>
      </section>

      <section class="skills-preview">
        <div class="container">
          <h3>{{ t("home.skills") }}</h3>
          <div class="skills-grid">
            <div class="skill-card">
              <i
                class="pi pi-code"
                style="font-size: 2rem; color: #2563eb;"
              ></i>
              <h4>{{ t("home.frontend") }}</h4>
              <p>Angular, React, TypeScript, HTML5, CSS3</p>
            </div>
            <div class="skill-card">
              <i
                class="pi pi-server"
                style="font-size: 2rem; color: #059669;"
              ></i>
              <h4>{{ t("home.backend") }}</h4>
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
export class HomeComponent {
  translationService = inject(TranslationService);

  t(key: string): string {
    return this.translationService.translate(key);
  }

  downloadCV() {
    // Usar window.open para evitar que Angular Router intercepte la ruta
    const cvUrl = 'assets/CV_Pietro_Alvarez.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV_Pietro_Alvarez.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
