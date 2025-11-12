import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";

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
        <h1>Contacto</h1>

        <div class="contact-content">
          <div class="contact-info">
            <h3>¿Tienes un proyecto en mente?</h3>
            <p>
              Me encantaría escuchar sobre tu proyecto. No dudes en contactarme
              a través del formulario o por los medios que prefieras.
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
                <label for="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  pInputText
                  [(ngModel)]="contactForm.name"
                  name="name"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  pInputText
                  [(ngModel)]="contactForm.email"
                  name="email"
                  placeholder="tu&#64;email.com"
                />
              </div>

              <div class="form-group">
                <label for="subject">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  pInputText
                  [(ngModel)]="contactForm.subject"
                  name="subject"
                  placeholder="Asunto del mensaje"
                />
              </div>

              <div class="form-group">
                <label for="message">Mensaje</label>
                <textarea
                  id="message"
                  pInputTextarea
                  [(ngModel)]="contactForm.message"
                  name="message"
                  rows="6"
                  placeholder="Escribe tu mensaje aquí..."
                >
                </textarea>
              </div>

              <p-button
                label="Enviar Mensaje"
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
  contactForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  sendMessage() {
    // Aquí puedes implementar la lógica para enviar el mensaje
    console.log("Formulario enviado:", this.contactForm);
    // Por ahora solo mostraremos el contenido en la consola
  }
}
