import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslationService } from "../../services/translation.service";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Pietro Alvarez</h3>
          <p>
            Programador web especializado en Angular, Node.js y desarrollo full
            stack.
          </p>
        </div>

        <div class="footer-section">
          <h4>Contacto</h4>
          <div class="footer-links">
            <a href="mailto:pietro103@hotmail.com">
              <i class="pi pi-envelope"></i> pietro103&#64;hotmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/pietro-antonello-francesco-alvarez-gazzola-33280438"
              target="_blank"
              rel="noopener"
            >
              <i class="pi pi-linkedin"></i> LinkedIn
            </a>
            <a href="/assets/CV_Pietro_Alvarez.pdf" download>
              <i class="pi pi-download"></i> {{ t('home.downloadCV') }}
            </a>
          </div>
        </div>

        <div class="footer-section">
          <h4>Ubicación</h4>
          <p><i class="pi pi-map-marker"></i> Italia / Chile</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>
          &copy; {{ currentYear }} Pietro Alvarez. Todos los derechos
          reservados.
        </p>
        <p class="footer-tech">Desarrollado con Angular 17 & PrimeNG</p>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        background: linear-gradient(
          135deg,
          var(--gray-900) 0%,
          var(--gray-800) 100%
        );
        color: var(--gray-100);
        padding: var(--spacing-3xl) 0 var(--spacing-lg);
        margin-top: var(--spacing-3xl);
      }

      .footer-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 var(--spacing-xl);
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: var(--spacing-2xl);
        margin-bottom: var(--spacing-2xl);

        @media (max-width: 768px) {
          grid-template-columns: 1fr;
          padding: 0 var(--spacing-md);
          gap: var(--spacing-xl);
        }
      }

      .footer-section {
        h3 {
          color: white;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: var(--spacing-md);
          background: linear-gradient(
            135deg,
            var(--primary-400) 0%,
            var(--primary-600) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        h4 {
          color: var(--gray-200);
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: var(--spacing-md);
        }

        p {
          color: var(--gray-400);
          line-height: 1.8;
          margin: 0;

          i {
            margin-right: var(--spacing-sm);
            color: var(--primary-400);
          }
        }
      }

      .footer-links {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);

        a {
          color: var(--gray-400);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          transition: all var(--transition-fast);

          i {
            color: var(--primary-400);
            font-size: 1.125rem;
          }

          &:hover {
            color: var(--primary-400);
            transform: translateX(4px);
          }
        }
      }

      .footer-bottom {
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--spacing-lg) var(--spacing-xl) 0;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;

        @media (max-width: 768px) {
          padding: var(--spacing-lg) var(--spacing-md) 0;
        }

        p {
          color: var(--gray-500);
          margin: var(--spacing-sm) 0;
          font-size: 0.875rem;
        }

        .footer-tech {
          color: var(--gray-600);
          font-size: 0.8rem;
        }
      }
    `,
  ],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  translationService = inject(TranslationService);

  t(key: string) {
    return this.translationService.translate(key);
  }
}
