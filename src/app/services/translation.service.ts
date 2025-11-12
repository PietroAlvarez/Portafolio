import { Injectable, signal } from "@angular/core";

export type Language = "es" | "en" | "it";

interface Translations {
  [key: string]: {
    es: string;
    en: string;
    it: string;
  };
}

@Injectable({
  providedIn: "root",
})
export class TranslationService {
  private currentLanguage = signal<Language>("es");

  private translations: Translations = {
    // Navbar
    "nav.home": {
      es: "Inicio",
      en: "Home",
      it: "Home",
    },
    "nav.biography": {
      es: "Biografía",
      en: "Biography",
      it: "Biografia",
    },
    "nav.projects": {
      es: "Proyectos",
      en: "Projects",
      it: "Progetti",
    },
    "nav.contact": {
      es: "Contacto",
      en: "Contact",
      it: "Contatto",
    },

    // Home
    "home.greeting": {
      es: "¡Hola! Soy Pietro Alvarez",
      en: "Hello! I'm Pietro Alvarez",
      it: "Ciao! Sono Pietro Alvarez",
    },
    "home.title": {
      es: "Programador web",
      en: "Web Developer",
      it: "Programmatore web",
    },
    "home.description": {
      es: "Nacido el 29 de Abril del año 1994 en Santiago de Chile y viviendo en Italia desde Octubre de 2023. Apasionado por crear soluciones digitales innovadoras y experiencias de usuario excepcionales. Especializado en tecnologías modernas como Angular, Node.js y más.",
      en: "Born on April 29, 1994 in Santiago de Chile and living in Italy since October 2023. Passionate about creating innovative digital solutions and exceptional user experiences. Specialized in modern technologies such as Angular, Node.js and more.",
      it: "Nato il 29 Aprile 1994 a Santiago del Cile e residente in Italia da Ottobre 2023. Appassionato di creare soluzioni digitali innovative e esperienze utente eccezionali. Specializzato in tecnologie moderne come Angular, Node.js e altro.",
    },
    "home.viewProjects": {
      es: "Ver Proyectos",
      en: "View Projects",
      it: "Vedi Progetti",
    },
    "home.contact": {
      es: "Contactar",
      en: "Contact",
      it: "Contattami",
    },
    "home.skills": {
      es: "Tecnologías Principales",
      en: "Main Technologies",
      it: "Tecnologie Principali",
    },
    "home.frontend": {
      es: "Frontend",
      en: "Frontend",
      it: "Frontend",
    },
    "home.backend": {
      es: "Backend",
      en: "Backend",
      it: "Backend",
    },
    "home.database": {
      es: "Base de Datos",
      en: "Database",
      it: "Database",
    },

    // Biography
    "bio.title": {
      es: "Sobre Mí",
      en: "About Me",
      it: "Chi Sono",
    },
    "bio.text": {
      es: "Mi nombre es Pietro Alvarez. Nací el 29 de Abril del año 1994 en Santiago de Chile y actualmente vivo en Italia desde Octubre de 2023. Soy programador web con experiencia en desarrollo de plataformas de pagos, cursos y estudiantes, así como en la creación de sitios web para empresas y turismo.",
      en: "My name is Pietro Alvarez. I was born on April 29, 1994 in Santiago de Chile and I currently live in Italy since October 2023. I am a web developer with experience in developing payment platforms, courses and students, as well as creating websites for companies and tourism.",
      it: "Mi chiamo Pietro Alvarez. Sono nato il 29 Aprile 1994 a Santiago del Cile e attualmente vivo in Italia da Ottobre 2023. Sono un programmatore web con esperienza nello sviluppo di piattaforme di pagamento, corsi e studenti, nonché nella creazione di siti web per aziende e turismo.",
    },

    // Projects
    "projects.title": {
      es: "Mis Proyectos",
      en: "My Projects",
      it: "I Miei Progetti",
    },
    "projects.project1.title": {
      es: "Plataforma de pagos, cursos y estudiantes",
      en: "Payment, course and student platform",
      it: "Piattaforma di pagamenti, corsi e studenti",
    },
    "projects.project1.desc": {
      es: "Proyecto de construcción de una plataforma integral para gestión de pagos, cursos y estudiantes.",
      en: "Project to build a comprehensive platform for managing payments, courses and students.",
      it: "Progetto di costruzione di una piattaforma completa per la gestione di pagamenti, corsi e studenti.",
    },
    "projects.project2.title": {
      es: "Pantalla mockup para sitio web de registro de empresas",
      en: "Mockup screen for company registration website",
      it: "Schermata mockup per sito web di registrazione aziende",
    },
    "projects.project2.desc": {
      es: "Diseño y desarrollo de una pantalla mockup para el registro y gestión de empresas.",
      en: "Design and development of a mockup screen for company registration and management.",
      it: "Progettazione e sviluppo di una schermata mockup per la registrazione e gestione delle aziende.",
    },
    "projects.project3.title": {
      es: "Sitio web de turismo de la región de Piamonte",
      en: "Tourism website of the Piedmont region",
      it: "Sito web di turismo della regione Piemonte",
    },
    "projects.project3.desc": {
      es: "Desarrollo de un sitio web para promover el turismo en la región de Piamonte, Italia.",
      en: "Development of a website to promote tourism in the Piedmont region, Italy.",
      it: "Sviluppo di un sito web per promuovere il turismo nella regione del Piemonte, Italia.",
    },

    // Contact
    "contact.title": {
      es: "Contacto",
      en: "Contact",
      it: "Contatto",
    },
    "contact.subtitle": {
      es: "¿Tienes un proyecto en mente?",
      en: "Do you have a project in mind?",
      it: "Hai un progetto in mente?",
    },
    "contact.description": {
      es: "Me encantaría escuchar sobre tu proyecto. No dudes en contactarme a través del formulario o por los medios que prefieras.",
      en: "I would love to hear about your project. Feel free to contact me through the form or by any means you prefer.",
      it: "Mi piacerebbe sentire parlare del tuo progetto. Non esitare a contattarmi tramite il modulo o con i mezzi che preferisci.",
    },
    "contact.form.name": {
      es: "Nombre",
      en: "Name",
      it: "Nome",
    },
    "contact.form.email": {
      es: "Email",
      en: "Email",
      it: "Email",
    },
    "contact.form.subject": {
      es: "Asunto",
      en: "Subject",
      it: "Oggetto",
    },
    "contact.form.message": {
      es: "Mensaje",
      en: "Message",
      it: "Messaggio",
    },
    "contact.form.send": {
      es: "Enviar Mensaje",
      en: "Send Message",
      it: "Invia Messaggio",
    },
    "contact.form.placeholder.name": {
      es: "Tu nombre completo",
      en: "Your full name",
      it: "Il tuo nome completo",
    },
    "contact.form.placeholder.email": {
      es: "tu&#64;email.com",
      en: "your&#64;email.com",
      it: "tua&#64;email.com",
    },
    "contact.form.placeholder.subject": {
      es: "Asunto del mensaje",
      en: "Message subject",
      it: "Oggetto del messaggio",
    },
    "contact.form.placeholder.message": {
      es: "Escribe tu mensaje aquí...",
      en: "Write your message here...",
      it: "Scrivi il tuo messaggio qui...",
    },
  };

  constructor() {
    // Cargar idioma guardado o usar el del navegador
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang) {
      this.currentLanguage.set(savedLang);
    } else {
      const browserLang = navigator.language.split("-")[0];
      if (
        browserLang === "es" ||
        browserLang === "en" ||
        browserLang === "it"
      ) {
        this.currentLanguage.set(browserLang);
      }
    }
  }

  setLanguage(lang: Language) {
    this.currentLanguage.set(lang);
    localStorage.setItem("language", lang);
  }

  getLanguage() {
    return this.currentLanguage();
  }

  translate(key: string): string {
    const translation = this.translations[key];
    if (!translation) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translation[this.currentLanguage()];
  }

  // Para usar en templates con signals
  t(key: string): string {
    return this.translate(key);
  }
}
