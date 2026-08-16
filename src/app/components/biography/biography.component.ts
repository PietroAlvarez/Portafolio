import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslationService } from "../../services/translation.service";

@Component({
  selector: "app-biography",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="biography-container">
      <div class="container">
        <h1>{{ t("bio.title") }}</h1>
        <p class="section-intro">{{ t("bio.intro") }}</p>
        <div class="bio-content">
          <div class="bio-text">
            <p>
              {{ t("bio.text") }}
            </p>
          </div>

          <div class="focus-grid">
            <article class="bio-section">
              <h3><i class="pi pi-code"></i>{{ t("bio.development.title") }}</h3>
              <p>{{ t("bio.development.text") }}</p>
            </article>
            <article class="bio-section">
              <h3><i class="pi pi-desktop"></i>{{ t("bio.support.title") }}</h3>
              <p>{{ t("bio.support.text") }}</p>
            </article>
            <article class="bio-section">
              <h3><i class="pi pi-cog"></i>{{ t("bio.rpa.title") }}</h3>
              <p>{{ t("bio.rpa.text") }}</p>
            </article>
          </div>

          <section class="experience-summary">
            <div>
              <span class="experience-label">{{ t("bio.current.label") }}</span>
              <h2>{{ t("bio.current.title") }}</h2>
              <p>{{ t("bio.current.text") }}</p>
            </div>
            <div class="profile-facts">
              <span><strong>Java / Angular</strong>{{ t("bio.fact.development") }}</span>
              <span><strong>Español · English · Italiano</strong>{{ t("bio.fact.languages") }}</span>
              <span><strong>Chile + remoto</strong>{{ t("bio.fact.location") }}</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./biography.component.scss"],
})
export class BiographyComponent {
  translationService = inject(TranslationService);

  t(key: string): string {
    return this.translationService.translate(key);
  }
}
