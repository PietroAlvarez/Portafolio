import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";
import { TranslationService } from "../../services/translation.service";
import emailjs from "@emailjs/browser";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
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
            <h3>{{ t("contact.subtitle") }}</h3>
            <p>
              {{ t("contact.description") }}
            </p>

            <div class="contact-methods">
              <div class="contact-method">
                <i class="pi pi-envelope"></i>
                <span>pietro103&#64;hotmail.com</span>
              </div>
              <div class="contact-method">
                <i class="pi pi-envelope"></i>
                <span>pietro103.lavoro&#64;gmail.com</span>
              </div>
              <div class="contact-method">
                <i class="pi pi-map-marker"></i>
                <span>Italia / Chile</span>
              </div>
            </div>

            <div class="social-links">
              <a
                href="https://www.linkedin.com/in/pietro-antonello-francesco-alvarez-gazzola-33280438"
                class="social-link"
                target="_blank"
                rel="noopener"
              >
                <i class="pi pi-linkedin"></i>
              </a>
            </div>
          </div>

          <div class="contact-form">
            <form>
              <div class="form-group">
                <label for="name">{{ t("contact.form.name") }}</label>
                <input
                  type="text"
                  id="name"
                  pInputText
                  [(ngModel)]="contactForm.name"
                  name="name"
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
                  [placeholder]="t('contact.form.placeholder.message')"
                >
                </textarea>
              </div>

              <p-button
                [label]="sending ? 'Enviando...' : t('contact.form.send')"
                icon="pi pi-send"
                (click)="sendMessage()"
                [disabled]="sending"
                [loading]="sending"
                styleClass="w-100"
              >
              </p-button>

              <div *ngIf="successMessage" class="success-message">
                <i class="pi pi-check-circle"></i> {{ successMessage }}
              </div>
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

  sending = false;
  successMessage = "";
  errorMessage = "";

  // Configura estos valores con tu cuenta de EmailJS
  // Regístrate gratis en https://www.emailjs.com/
  private readonly EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Reemplazar
  private readonly EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Reemplazar
  private readonly EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Reemplazar

  t(key: string): string {
    return this.translationService.translate(key);
  }

  async sendMessage() {
    // Validaciones básicas
    if (
      !this.contactForm.name ||
      !this.contactForm.email ||
      !this.contactForm.message
    ) {
      this.errorMessage = "Por favor completa todos los campos obligatorios";
      setTimeout(() => (this.errorMessage = ""), 5000);
      return;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.contactForm.email)) {
      this.errorMessage = "Por favor ingresa un email válido";
      setTimeout(() => (this.errorMessage = ""), 5000);
      return;
    }

    this.sending = true;
    this.errorMessage = "";
    this.successMessage = "";

    try {
      const templateParams = {
        from_name: this.contactForm.name,
        from_email: this.contactForm.email,
        subject: this.contactForm.subject,
        message: this.contactForm.message,
        to_email: "pietro103@hotmail.com", // Tu email
      };

      await emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        templateParams,
        this.EMAILJS_PUBLIC_KEY
      );

      this.successMessage = "¡Mensaje enviado con éxito! Te responderé pronto.";

      // Limpiar formulario
      this.contactForm = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };

      setTimeout(() => (this.successMessage = ""), 5000);
    } catch (error) {
      console.error("Error al enviar email:", error);
      this.errorMessage =
        "Hubo un error al enviar el mensaje. Por favor intenta de nuevo o contáctame directamente por email.";
      setTimeout(() => (this.errorMessage = ""), 5000);
    } finally {
      this.sending = false;
    }
  }
}
