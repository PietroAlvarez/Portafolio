import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      class="theme-toggle" 
      (click)="toggleTheme()"
      [attr.aria-label]="themeService.isDark() ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
      [title]="themeService.isDark() ? 'Modo claro' : 'Modo oscuro'"
    >
      <i [class]="themeService.isDark() ? 'pi pi-sun' : 'pi pi-moon'"></i>
    </button>
  `,
  styles: [`
    .theme-toggle {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 2000;
      width: 56px;
      height: 56px;
      border-radius: var(--radius-full);
      border: none;
      background: linear-gradient(135deg, var(--primary-600) 0%, var(--primary-700) 100%);
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      box-shadow: var(--shadow-xl);
      transition: all var(--transition-base);
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 768px) {
        width: 48px;
        height: 48px;
        bottom: 15px;
        right: 15px;
        font-size: 1.25rem;
      }

      &:hover {
        transform: scale(1.1) rotate(15deg);
        box-shadow: var(--shadow-2xl);
      }

      &:active {
        transform: scale(0.95);
      }

      i {
        transition: transform var(--transition-base);
      }

      &:hover i {
        transform: rotate(-15deg);
      }
    }
  `]
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
