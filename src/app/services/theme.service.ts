import { Injectable, signal, effect } from "@angular/core";

export type Theme = "light" | "dark";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private currentTheme = signal<Theme>("light");

  constructor() {
    // Cargar tema guardado o detectar preferencia del sistema
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      this.currentTheme.set(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      this.currentTheme.set(prefersDark ? "dark" : "light");
    }

    // Aplicar tema al cargar
    this.applyTheme(this.currentTheme());

    // Effect para aplicar tema cuando cambie
    effect(() => {
      this.applyTheme(this.currentTheme());
    });
  }

  getTheme() {
    return this.currentTheme();
  }

  toggleTheme() {
    const newTheme: Theme = this.currentTheme() === "light" ? "dark" : "light";
    this.currentTheme.set(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  private applyTheme(theme: Theme) {
    if (theme === "dark") {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }
  }

  isDark() {
    return this.currentTheme() === "dark";
  }
}
