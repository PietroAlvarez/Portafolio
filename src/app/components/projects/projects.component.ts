import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { TranslationService } from "../../services/translation.service";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  template: `
    <div class="projects-container">
      <div class="container">
        <h1>{{ t("projects.title") }}</h1>
        <div class="projects-grid">
          <!-- Proyecto 1 -->
          <p-card class="project-card">
            <ng-template pTemplate="header">
              <div class="project-image-placeholder">
                <i class="pi pi-credit-card"></i>
              </div>
            </ng-template>
            <ng-template pTemplate="content">
              <h3>{{ t("projects.project1.title") }}</h3>
              <p>
                {{ t("projects.project1.desc") }}
              </p>
              <div class="project-technologies">
                <span class="tech-tag">Angular</span>
                <span class="tech-tag">Node.js</span>
                <span class="tech-tag">PrimeNG</span>
              </div>
            </ng-template>
          </p-card>

          <!-- Proyecto 2 -->
          <p-card class="project-card">
            <ng-template pTemplate="header">
              <div class="project-image-placeholder">
                <i class="pi pi-building"></i>
              </div>
            </ng-template>
            <ng-template pTemplate="content">
              <h3>{{ t("projects.project2.title") }}</h3>
              <p>
                {{ t("projects.project2.desc") }}
              </p>
              <div class="project-technologies">
                <span class="tech-tag">Angular</span>
                <span class="tech-tag">PrimeNG</span>
              </div>
            </ng-template>
          </p-card>

          <!-- Proyecto 3 -->
          <p-card class="project-card">
            <ng-template pTemplate="header">
              <div class="project-image-placeholder">
                <i class="pi pi-globe"></i>
              </div>
            </ng-template>
            <ng-template pTemplate="content">
              <h3>{{ t("projects.project3.title") }}</h3>
              <p>
                {{ t("projects.project3.desc") }}
              </p>
              <div class="project-technologies">
                <span class="tech-tag">Angular</span>
                <span class="tech-tag">PrimeNG</span>
              </div>
            </ng-template>
          </p-card>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent {
  translationService = inject(TranslationService);

  t(key: string): string {
    return this.translationService.translate(key);
  }
}
