import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MenubarModule } from "primeng/menubar";
import { MenuItem } from "primeng/api";
import { TranslationService } from "../../services/translation.service";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule, RouterModule, MenubarModule],
  template: `
    <div class="navbar-container">
      <p-menubar [model]="items" styleClass="custom-menubar">
        <ng-template pTemplate="start">
          <div class="logo">
            <span class="logo-text">Mi Portafolio</span>
          </div>
        </ng-template>
      </p-menubar>
    </div>
  `,
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  translationService = inject(TranslationService);
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: this.translationService.translate("nav.home"),
        icon: "pi pi-home",
        routerLink: ["/"],
      },
      {
        label: this.translationService.translate("nav.biography"),
        icon: "pi pi-user",
        routerLink: ["/biografia"],
      },
      {
        label: this.translationService.translate("nav.projects"),
        icon: "pi pi-briefcase",
        routerLink: ["/proyectos"],
      },
      {
        label: this.translationService.translate("nav.cv"),
        icon: "pi pi-download",
        command: () => {
          window.open('assets/CV_Pietro_Alvarez.pdf', '_blank');
        }
      },
      {
        label: this.translationService.translate("nav.contact"),
        icon: "pi pi-envelope",
        routerLink: ["/contacto"],
      },
    ];
  }
}
