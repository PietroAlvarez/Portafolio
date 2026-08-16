import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";
import { TranslationService } from "../../services/translation.service";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    FormsModule,
  ],
  template: `
    <div class="contact-container">
      <div class="container">
        <h1>{{ t("contact.title") }}</h1>

        <div class="contact-content">
          <div class="contact-info">
            <span class="contact-eyebrow">{{ t("contact.eyebrow") }}</span>
            <h3>{{ t("contact.subtitle") }}</h3>
            <p>{{ t("contact.description") }}</p>

            <div class="contact-methods">
              <a class="contact-method" href="mailto:pietro103.lavoro@gmail.com">
                <i class="pi pi-envelope"></i>
                <span>pietro103.lavoro&#64;gmail.com</span>
              </a>
              <div class="contact-method">
                <i class="pi pi-map-marker"></i>
                <span>{{ t("contact.location") }}</span>
              </div>
              <div class="contact-method">
                <i class="pi pi-clock"></i>
                <span>{{ t("contact.availability") }}</span>
              </div>
            </div>

            <div class="social-links">
              <a
                href="https://www.linkedin.com/in/pietro-antonello-francesco-alvarez-gazzola-33280438"
                class="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i class="pi pi-linkedin"></i>
              </a>
              <a
                href="https://github.com/PietroAlvarez"
                class="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i class="pi pi-github"></i>
              </a>
              <a
                href="assets/CV_Pietro_Alvarez.pdf"
                class="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Currículum"
              >
                <i class="pi pi-file-pdf"></i>
              </a>
            </div>
          </div>

          <div class="contact-form">
            <form (ngSubmit)="prepareEmail()">
              <div class="form-group">
                <label for="name">{{ t("contact.form.name") }}</label>
                <input
                  type="text"
                  id="name"
                  pInputText
                  [(ngModel)]="contactForm.name"
                  name="name"
                  required
                  [placeholder]="t('contact.form.placeholder.name')"
                />
              </div>

              <div class="form-group">
                <label for="email">{{ t("contact.form.email") }}</label>
                <input
                  type="email"
                  id="email"
                  pInputText
                  [(ngModel)]="contactForm.email"
                  name="email"
                  required
                  [placeholder]="t('contact.form.placeholder.email')"
                />
              </div>

              <div class="form-group">
                <label for="subject">{{ t("contact.form.subject") }}</label>
                <input
                  type="text"
                  id="subject"
                  pInputText
                  [(ngModel)]="contactForm.subject"
                  name="subject"
                  required
                  [placeholder]="t('contact.form.placeholder.subject')"
                />
              </div>

              <div class="form-group">
                <label for="message">{{ t("contact.form.message") }}</label>
                <textarea
                  id="message"
                  pInputTextarea
                  [(ngModel)]="contactForm.message"
                  name="message"
                  rows="6"
                  required
                  [placeholder]="t('contact.form.placeholder.message')"
                ></textarea>
              </div>

              <p-button
                type="submit"
                [label]="t('contact.form.send')"
                icon="pi pi-envelope"
                styleClass="w-100"
              ></p-button>

              <div *ngIf="errorMessage" class="error-message">
                <i class="pi pi-times-circle"></i> {{ errorMessage }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {
  translationService = inject(TranslationService);

  contactForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  errorMessage = "";

  t(key: string): string {
    return this.translationService.translate(key);
  }

  prepareEmail() {
    if (
      !this.contactForm.name ||
      !this.contactForm.email ||
      !this.contactForm.subject ||
      !this.contactForm.message
    ) {
      this.showError(this.t("contact.form.error.required"));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.contactForm.email)) {
      this.showError(this.t("contact.form.error.email"));
      return;
    }

    const subject = this.contactForm.subject || this.t("contact.form.defaultSubject");
    const body = `${this.contactForm.message}\n\n${this.contactForm.name}\n${this.contactForm.email}`;
    window.location.href = `mailto:pietro103.lavoro@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  private showError(message: string) {
    this.errorMessage = message;
    window.setTimeout(() => (this.errorMessage = ""), 5000);
  }
}
