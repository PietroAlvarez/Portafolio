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
        <h1>{{ t('bio.title') }}</h1>
        <div class="bio-content">
          <div class="bio-text">
            <p>
              {{ t('bio.text') }}
            </p>
          </div>
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
