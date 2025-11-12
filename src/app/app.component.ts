import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LanguageSelectorComponent } from "./components/language-selector/language-selector.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    LanguageSelectorComponent,
    FooterComponent,
  ],
  template: `
    <div class="app-container">
      <app-language-selector></app-language-selector>
      <app-navbar></app-navbar>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Mi Portafolio Personal";
}
