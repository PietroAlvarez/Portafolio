import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  TranslationService,
  Language,
} from "../../services/translation.service";

@Component({
  selector: "app-language-selector",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="language-selector">
      <button
        *ngFor="let lang of languages"
        [class.active]="translationService.getLanguage() === lang.code"
        (click)="changeLanguage(lang.code)"
        [title]="lang.name"
        class="lang-btn"
      >
        <span class="lang-text">{{ lang.code.toUpperCase() }}</span>
      </button>
    </div>
  `,
  styles: [
    `
      .language-selector {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 2000;
        display: flex;
        gap: 0.5rem;
        background: var(--bg-primary);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        padding: 0.5rem;
        border-radius: var(--radius-full);
        box-shadow: var(--shadow-lg);
        border: 1px solid var(--gray-200);
        transition: all var(--transition-base);

        @media (max-width: 768px) {
          top: 10px;
          right: 10px;
          padding: 0.25rem;
          gap: 0.25rem;
          box-shadow: var(--shadow-md);
        }
      }

      .lang-btn {
        width: 44px;
        height: 44px;
        border: 2px solid transparent;
        border-radius: var(--radius-full);
        background: var(--bg-secondary);
        font-size: 0.875rem;
        font-weight: 700;
        cursor: pointer;
        transition: all var(--transition-fast);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-primary);

        @media (max-width: 768px) {
          width: 32px;
          height: 32px;
          font-size: 0.625rem;
          border-width: 1px;
        }

        &:hover {
          background: var(--primary-50);
          transform: scale(1.1);
          color: var(--primary-700);

          :host-context(.dark-theme) & {
            background: rgba(59, 130, 246, 0.2);
            color: var(--primary-400);
          }
        }

        &.active {
          background: linear-gradient(
            135deg,
            var(--primary-600) 0%,
            var(--primary-700) 100%
          );
          border-color: var(--primary-600);
          transform: scale(1.05);
          box-shadow: var(--shadow-md);
          color: white;
        }

        &:active {
          transform: scale(0.95);
        }

        .lang-text {
          letter-spacing: 0.5px;
        }
      }
    `,
  ],
})
export class LanguageSelectorComponent {
  translationService = inject(TranslationService);

  languages = [
    { code: "es" as Language, name: "Español", flag: "🇪🇸" },
    { code: "en" as Language, name: "English", flag: "🇬🇧" },
    { code: "it" as Language, name: "Italiano", flag: "🇮🇹" },
  ];

  changeLanguage(lang: Language) {
    this.translationService.setLanguage(lang);
    window.location.reload(); // Recargar para aplicar traducciones
  }
}
