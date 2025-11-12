import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardModule } from "primeng/card";
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
                [label]="t('contact.form.send')"
                icon="pi pi-send"
                (click)="sendMessage()"
                styleClass="w-100"
              >
              </p-button>
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

  t(key: string): string {
    return this.translationService.translate(key);
  }

  sendMessage() {
    // Aquí puedes implementar la lógica para enviar el mensaje
    console.log("Formulario enviado:", this.contactForm);
    // Por ahora solo mostraremos el contenido en la consola
  }
}
