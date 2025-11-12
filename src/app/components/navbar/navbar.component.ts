import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MenubarModule],
  template: `
    <div class="navbar-container">
      <p-menubar 
        [model]="items" 
        styleClass="custom-menubar">
        <ng-template pTemplate="start">
          <div class="logo">
            <span class="logo-text">Mi Portafolio</span>
          </div>
        </ng-template>
      </p-menubar>
    </div>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: ['/']
      },
      {
        label: 'Biografía',
        icon: 'pi pi-user',
        routerLink: ['/biografia']
      },
      {
        label: 'Proyectos',
        icon: 'pi pi-briefcase',
        routerLink: ['/proyectos']
      },
      {
        label: 'Contacto',
        icon: 'pi pi-envelope',
        routerLink: ['/contacto']
      }
    ];
  }
}