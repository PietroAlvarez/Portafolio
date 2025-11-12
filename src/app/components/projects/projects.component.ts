import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  template: `
    <div class="projects-container">
      <div class="container">
        <h1>Mis Proyectos</h1>
        <div class="projects-grid">
          <p-card *ngFor="let project of projects" styleClass="project-card">
            <ng-template pTemplate="header">
              <div class="project-image-placeholder">
                <i class="pi pi-image" style="font-size: 3rem; color: #64748b;"></i>
              </div>
            </ng-template>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-technologies">
              <span *ngFor="let tech of project.technologies" class="tech-tag">
                {{ tech }}
              </span>
            </div>
            <ng-template pTemplate="footer">
              <div class="project-actions">
                <p-button 
                  label="Ver Demo" 
                  icon="pi pi-eye"
                  styleClass="p-button-sm p-button-outlined">
                </p-button>
                <p-button 
                  label="Código" 
                  icon="pi pi-github"
                  styleClass="p-button-sm">
                </p-button>
              </div>
            </ng-template>
          </p-card>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción del primer proyecto. Aquí puedes explicar qué hace tu aplicación y qué tecnologías utilizaste.',
      technologies: ['Angular', 'TypeScript', 'PrimeNG']
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del segundo proyecto. Menciona los desafíos que enfrentaste y cómo los resolviste.',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción del tercer proyecto. Destaca las funcionalidades más importantes y el impacto que tuvo.',
      technologies: ['Vue.js', 'Express', 'MySQL']
    }
  ];
}