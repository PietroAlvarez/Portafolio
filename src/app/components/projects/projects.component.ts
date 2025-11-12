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
          
          <!-- Proyecto 1 -->
          <p-card class="project-card">
            <ng-template pTemplate="header">
              <div class="project-image-placeholder">
                <i class="pi pi-credit-card"></i>
              </div>
            </ng-template>
            <ng-template pTemplate="content">
              <h3>Plataforma de pagos, cursos y estudiantes</h3>
              <p>Proyecto de construcción de una plataforma integral para gestión de pagos, cursos y estudiantes.</p>
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
              <h3>Pantalla mockup para sitio web de registro de empresas</h3>
              <p>Diseño y desarrollo de una pantalla mockup para el registro y gestión de empresas.</p>
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
              <h3>Sitio web de turismo de la región de Piamonte</h3>
              <p>Desarrollo de un sitio web para promover el turismo en la región de Piamonte, Italia.</p>
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
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {}