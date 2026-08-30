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
      es: "Perfil",
      en: "Profile",
      it: "Profilo",
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
    "nav.cv": {
      es: "CV",
      en: "Resume",
      it: "CV",
    },

    // Home
    "home.greeting": {
      es: "Pietro Alvarez",
      en: "Pietro Alvarez",
      it: "Pietro Alvarez",
    },
    "home.title": {
      es: "Desarrollador Java / Angular · Soporte TI · RPA",
      en: "Java / Angular Developer · IT Support · RPA",
      it: "Sviluppatore Java / Angular · Supporto IT · RPA",
    },
    "home.description": {
      es: "Construyo aplicaciones web funcionales con Java 21, Spring Boot, Angular y PostgreSQL. Combino desarrollo full stack con experiencia real en soporte técnico, monitoreo operativo y automatización de procesos.",
      en: "I build functional web applications with Java 21, Spring Boot, Angular and PostgreSQL. I combine full-stack development with hands-on experience in technical support, operations monitoring and process automation.",
      it: "Sviluppo applicazioni web funzionali con Java 21, Spring Boot, Angular e PostgreSQL. Unisco lo sviluppo full stack all'esperienza concreta nel supporto tecnico, nel monitoraggio operativo e nell'automazione dei processi.",
    },
    "home.availability": {
      es: "Disponible para nuevas oportunidades",
      en: "Open to new opportunities",
      it: "Disponibile per nuove opportunità",
    },
    "home.workMode": {
      es: "Santiago, Chile · Presencial o remoto internacional",
      en: "Santiago, Chile · On-site or remote worldwide",
      it: "Santiago, Cile · In presenza o da remoto nel mondo",
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
    "home.downloadCV": {
      es: "Descargar CV",
      en: "Download CV",
      it: "Scarica CV",
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
    "home.operations": {
      es: "Soporte y automatización",
      en: "Support and automation",
      it: "Supporto e automazione",
    },

    // Biography
    "bio.title": {
      es: "Perfil profesional",
      en: "Professional profile",
      it: "Profilo professionale",
    },
    "bio.intro": {
      es: "Un perfil técnico versátil, orientado a resolver problemas y entregar soluciones útiles desde el desarrollo hasta la operación.",
      en: "A versatile technical profile focused on solving problems and delivering useful solutions from development through operations.",
      it: "Un profilo tecnico versatile, orientato alla risoluzione dei problemi e alla realizzazione di soluzioni utili, dallo sviluppo alle operazioni.",
    },
    "bio.text": {
      es: "Soy desarrollador junior con experiencia profesional en aplicaciones web y backend con Java 21, Spring Boot, API REST y PostgreSQL, además de frontend con Angular, TypeScript, HTML y CSS. Mi experiencia en soporte TI, monitoreo de servidores y automatización RPA me permite comprender tanto la construcción del software como su uso y continuidad en entornos reales.",
      en: "I am a junior developer with professional experience in web applications and backend development using Java 21, Spring Boot, REST APIs and PostgreSQL, plus frontend work with Angular, TypeScript, HTML and CSS. My background in IT support, server monitoring and RPA automation helps me understand both software delivery and its reliable use in real environments.",
      it: "Sono uno sviluppatore junior con esperienza professionale in applicazioni web e backend con Java 21, Spring Boot, API REST e PostgreSQL, oltre al frontend con Angular, TypeScript, HTML e CSS. La mia esperienza nel supporto IT, nel monitoraggio dei server e nell'automazione RPA mi permette di comprendere sia lo sviluppo del software sia il suo utilizzo affidabile in ambienti reali.",
    },
    "bio.development.title": { es: "Desarrollo full stack", en: "Full-stack development", it: "Sviluppo full stack" },
    "bio.development.text": { es: "Java 21, Spring Boot, API REST, Angular, TypeScript y PostgreSQL para construir aplicaciones mantenibles y responsivas.", en: "Java 21, Spring Boot, REST APIs, Angular, TypeScript and PostgreSQL to build maintainable, responsive applications.", it: "Java 21, Spring Boot, API REST, Angular, TypeScript e PostgreSQL per creare applicazioni manutenibili e responsive." },
    "bio.support.title": { es: "Soporte y operaciones", en: "Support and operations", it: "Supporto e operazioni" },
    "bio.support.text": { es: "Resolución de incidencias de nivel 1, mantenimiento de redes, gestión de cuentas, Help Desk y monitoreo de servicios.", en: "Level-one incident resolution, network maintenance, account management, Help Desk and service monitoring.", it: "Risoluzione di incidenti di primo livello, manutenzione reti, gestione account, Help Desk e monitoraggio dei servizi." },
    "bio.rpa.title": { es: "Automatización RPA", en: "RPA automation", it: "Automazione RPA" },
    "bio.rpa.text": { es: "Experiencia configurando, monitoreando y optimizando procesos automatizados, con foco en continuidad y mejora operacional.", en: "Experience configuring, monitoring and improving automated processes, with a focus on continuity and operational improvement.", it: "Esperienza nella configurazione, nel monitoraggio e nel miglioramento dei processi automatizzati, con attenzione alla continuità operativa." },
    "bio.current.label": { es: "Experiencia actual", en: "Current experience", it: "Esperienza attuale" },
    "bio.current.title": { es: "Soporte TI · Colegio Carmela Carvajal", en: "IT Support · Colegio Carmela Carvajal", it: "Supporto IT · Colegio Carmela Carvajal" },
    "bio.current.text": { es: "Actualmente realizo mantenimiento y monitoreo de redes, atiendo incidencias técnicas, gestiono cuentas institucionales y apoyo la continuidad tecnológica del establecimiento.", en: "I currently maintain and monitor networks, resolve technical incidents, manage institutional accounts and support the school's technology continuity.", it: "Attualmente mi occupo della manutenzione e del monitoraggio delle reti, della risoluzione degli incidenti tecnici, della gestione degli account istituzionali e della continuità tecnologica della scuola." },
    "bio.fact.development": { es: "Enfoque principal", en: "Primary focus", it: "Focus principale" },
    "bio.fact.languages": { es: "Comunicación internacional", en: "International communication", it: "Comunicazione internazionale" },
    "bio.fact.location": { es: "Modalidad de trabajo", en: "Work preference", it: "Modalità di lavoro" },

    // Projects
    "projects.title": {
      es: "Proyectos destacados",
      en: "Featured projects",
      it: "Progetti in evidenza",
    },
    "projects.intro": { es: "Aplicaciones funcionales que demuestran experiencia en desarrollo full stack, soporte TI y automatización.", en: "Functional applications demonstrating full-stack development, IT support and automation experience.", it: "Applicazioni funzionali che dimostrano esperienza nello sviluppo full stack, nel supporto IT e nell'automazione." },
    "projects.docutrack.title": { es: "DocuTrack · Gestión documental", en: "DocuTrack · Document management", it: "DocuTrack · Gestione documentale" },
    "projects.docutrack.desc": { es: "Aplicación full stack para gestionar documentación laboral, estados y vencimientos. Basada en el trabajo realizado con Java 21, Spring Boot, Angular y PostgreSQL.", en: "Full-stack application for managing employment documents, statuses and due dates, built with Java 21, Spring Boot, Angular and PostgreSQL.", it: "Applicazione full stack per la gestione di documenti di lavoro, stati e scadenze, sviluppata con Java 21, Spring Boot, Angular e PostgreSQL." },
    "projects.supportdesk.title": { es: "SupportDesk · Mesa de ayuda TI", en: "SupportDesk · IT help desk", it: "SupportDesk · Help desk IT" },
    "projects.supportdesk.desc": { es: "Mesa de ayuda para registrar, priorizar y resolver tickets técnicos. Incluye dashboard, búsqueda, estados y creación de solicitudes.", en: "Help desk for registering, prioritizing and resolving technical tickets, including a dashboard, search, statuses and request creation.", it: "Help desk per registrare, assegnare priorità e risolvere ticket tecnici, con dashboard, ricerca, stati e creazione di richieste." },
    "projects.flowwatch.title": { es: "FlowWatch · Monitor RPA", en: "FlowWatch · RPA monitor", it: "FlowWatch · Monitor RPA" },
    "projects.flowwatch.desc": { es: "Centro de control para supervisar automatizaciones RPA, activar procesos y revisar ejecuciones, resultados e incidencias.", en: "Control center for monitoring RPA automations, activating processes and reviewing runs, results and incidents.", it: "Centro di controllo per monitorare le automazioni RPA, attivare i processi e consultare esecuzioni, risultati e incidenti." },
    "projects.centroti.title": { es: "Centro TI · Centro de mando de soporte", en: "Centro TI · IT support command center", it: "Centro TI · Centro di controllo del supporto" },
    "projects.centroti.desc": { es: "Plataforma unificada para reservas de laboratorio, tareas de soporte, inventario, tablets y monitoreo de red. Construida con Angular, Java 21, Spring Boot y PostgreSQL.", en: "Unified platform for lab reservations, support tasks, inventory, tablets and network monitoring, built with Angular, Java 21, Spring Boot and PostgreSQL.", it: "Piattaforma unificata per prenotazioni del laboratorio, attività di supporto, inventario, tablet e monitoraggio della rete, sviluppata con Angular, Java 21, Spring Boot e PostgreSQL." },
    "projects.live": { es: "Demo disponible", en: "Live demo", it: "Demo online" },
    "projects.source": { es: "Código público", en: "Public source", it: "Codice pubblico" },
    "projects.viewDemo": { es: "Ver demo", en: "View demo", it: "Vedi demo" },
    "projects.viewCode": { es: "Ver código", en: "View code", it: "Vedi codice" },
    "projects.github.eyebrow": { es: "Código verificable", en: "Verifiable code", it: "Codice verificabile" },
    "projects.github.title": { es: "Más trabajo en GitHub", en: "More work on GitHub", it: "Altri progetti su GitHub" },
    "projects.github.text": { es: "Explora los repositorios, la estructura del código y la evolución de cada proyecto.", en: "Explore the repositories, code structure and evolution of each project.", it: "Esplora i repository, la struttura del codice e l'evoluzione di ogni progetto." },

    // Contact
    "contact.title": {
      es: "Hablemos",
      en: "Let's connect",
      it: "Parliamone",
    },
    "contact.subtitle": {
      es: "Disponible para oportunidades profesionales",
      en: "Available for professional opportunities",
      it: "Disponibile per opportunità professionali",
    },
    "contact.description": {
      es: "Busco aportar en equipos de desarrollo Java/Angular, soporte TI, automatización RPA o QA. Puedes contactarme directamente o preparar un correo desde este formulario.",
      en: "I am looking to contribute to Java/Angular development, IT support, RPA automation or QA teams. Contact me directly or prepare an email using this form.",
      it: "Cerco opportunità in team di sviluppo Java/Angular, supporto IT, automazione RPA o QA. Puoi contattarmi direttamente o preparare un'email tramite questo modulo.",
    },
    "contact.eyebrow": { es: "Contacto profesional", en: "Professional contact", it: "Contatto professionale" },
    "contact.location": { es: "Santiago, Chile · Remoto internacional", en: "Santiago, Chile · Remote worldwide", it: "Santiago, Cile · Da remoto nel mondo" },
    "contact.availability": { es: "Disponibilidad: 2 a 4 semanas", en: "Availability: 2 to 4 weeks", it: "Disponibilità: da 2 a 4 settimane" },
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
      es: "Preparar correo",
      en: "Prepare email",
      it: "Prepara email",
    },
    "contact.form.error.required": { es: "Completa nombre, email, asunto y mensaje.", en: "Complete your name, email, subject and message.", it: "Completa nome, email, oggetto e messaggio." },
    "contact.form.error.email": { es: "Ingresa un email válido.", en: "Enter a valid email address.", it: "Inserisci un indirizzo email valido." },
    "contact.form.defaultSubject": { es: "Contacto desde el portafolio", en: "Portfolio contact", it: "Contatto dal portfolio" },
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
