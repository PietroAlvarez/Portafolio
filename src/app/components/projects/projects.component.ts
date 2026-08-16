import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { TranslationService } from "../../services/translation.service";

interface PortfolioProject {
  titleKey: string;
  descriptionKey: string;
  icon: string;
  accent: string;
  technologies: string[];
  repositoryUrl: string;
  demoUrl?: string;
}

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  template: `
    <div class="projects-container">
      <div class="container">
        <h1>{{ t("projects.title") }}</h1>
        <p class="projects-intro">{{ t("projects.intro") }}</p>

        <div class="projects-grid">
          <p-card *ngFor="let project of projects" class="project-card">
            <ng-template pTemplate="header">
              <div
                class="project-image-placeholder"
                [ngClass]="project.accent"
              >
                <i [class]="project.icon"></i>
                <span class="project-status">
                  {{ project.demoUrl ? t("projects.live") : t("projects.source") }}
                </span>
              </div>
            </ng-template>

            <ng-template pTemplate="content">
              <h3>{{ t(project.titleKey) }}</h3>
              <p>{{ t(project.descriptionKey) }}</p>

              <div class="project-technologies">
                <span
                  *ngFor="let technology of project.technologies"
                  class="tech-tag"
                >
                  {{ technology }}
                </span>
              </div>

              <div class="project-actions">
                <p-button
                  *ngIf="project.demoUrl"
                  [label]="t('projects.viewDemo')"
                  icon="pi pi-external-link"
                  (onClick)="openExternal(project.demoUrl!)"
                  styleClass="p-button-sm"
                ></p-button>
                <p-button
                  [label]="t('projects.viewCode')"
                  icon="pi pi-github"
                  (onClick)="openExternal(project.repositoryUrl)"
                  styleClass="p-button-sm p-button-outlined"
                ></p-button>
              </div>
            </ng-template>
          </p-card>
        </div>

        <div class="github-callout">
          <div>
            <span>{{ t("projects.github.eyebrow") }}</span>
            <h2>{{ t("projects.github.title") }}</h2>
            <p>{{ t("projects.github.text") }}</p>
          </div>
          <p-button
            label="github.com/PietroAlvarez"
            icon="pi pi-github"
            (onClick)="openExternal(githubUrl)"
            styleClass="p-button-lg"
          ></p-button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent {
  translationService = inject(TranslationService);
  readonly githubUrl = "https://github.com/PietroAlvarez";

  readonly projects: PortfolioProject[] = [
    {
      titleKey: "projects.docutrack.title",
      descriptionKey: "projects.docutrack.desc",
      icon: "pi pi-folder-open",
      accent: "docutrack",
      technologies: ["Java 21", "Spring Boot", "Angular", "PostgreSQL", "API REST"],
      repositoryUrl: "https://github.com/PietroAlvarez/DocuTrack",
    },
    {
      titleKey: "projects.supportdesk.title",
      descriptionKey: "projects.supportdesk.desc",
      icon: "pi pi-headphones",
      accent: "supportdesk",
      technologies: ["Java 21", "Spring Boot", "Angular", "PostgreSQL", "Docker"],
      repositoryUrl: "https://github.com/PietroAlvarez/SupportDesk",
      demoUrl: "https://pietroalvarez-supportdesk-demo.onrender.com",
    },
    {
      titleKey: "projects.flowwatch.title",
      descriptionKey: "projects.flowwatch.desc",
      icon: "pi pi-chart-line",
      accent: "flowwatch",
      technologies: ["Java 21", "Spring Boot", "Angular", "PostgreSQL", "RPA"],
      repositoryUrl: "https://github.com/PietroAlvarez/FlowWatch",
      demoUrl: "https://pietroalvarez-flowwatch-demo.onrender.com",
    },
  ];

  t(key: string): string {
    return this.translationService.translate(key);
  }

  openExternal(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
