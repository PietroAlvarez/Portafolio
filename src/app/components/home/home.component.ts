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
          <div class="hero-eyebrow">
            <span class="status-dot"></span>
            {{ t("home.availability") }}
          </div>
          <h1 class="hero-title">{{ t("home.greeting") }}</h1>
          <h2 class="hero-subtitle">{{ t("home.title") }}</h2>
          <p class="hero-description">
            {{ t("home.description") }}
          </p>
          <div class="professional-highlights" aria-label="Tecnologías destacadas">
            <span>Java 21 · Spring Boot</span>
            <span>Angular · TypeScript</span>
            <span>PostgreSQL · API REST</span>
          </div>
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
              label="GitHub"
              icon="pi pi-github"
              (onClick)="openExternal(githubUrl)"
              styleClass="p-button-lg p-button-outlined"
            >
            </p-button>
          </div>
          <p class="work-mode">
            <i class="pi pi-map-marker"></i>
            {{ t("home.workMode") }}
          </p>
        </div>
        <div class="hero-image">
          <div class="avatar-container">
            <div class="avatar-wrapper">
              <div class="avatar-circle">
                <i class="pi pi-code"></i>
              </div>
              <div class="avatar-glow"></div>
            </div>
            <p class="avatar-caption">Pietro Alvarez</p>
            <p class="avatar-role">Java · Angular · Soporte TI · RPA</p>
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
              <p>Angular, TypeScript, JavaScript, HTML5, CSS3</p>
            </div>
            <div class="skill-card">
              <i
                class="pi pi-server"
                style="font-size: 2rem; color: #059669;"
              ></i>
              <h4>{{ t("home.backend") }}</h4>
              <p>Java 21, Spring Boot, API REST, PostgreSQL</p>
            </div>
            <div class="skill-card">
              <i class="pi pi-cog" style="font-size: 2rem; color: #dc2626;"></i>
              <h4>{{ t("home.operations") }}</h4>
              <p>Soporte TI, redes, Help Desk, RPA y monitoreo</p>
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
  readonly githubUrl = "https://github.com/PietroAlvarez";

  t(key: string): string {
    return this.translationService.translate(key);
  }

  downloadCV() {
    // Usar window.open para evitar que Angular Router intercepte la ruta
    const cvUrl = "assets/CV_Pietro_Alvarez.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV_Pietro_Alvarez.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  openExternal(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
