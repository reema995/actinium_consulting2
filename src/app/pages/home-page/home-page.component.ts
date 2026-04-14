import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { I18nService } from '../../i18n.service';
import { PARTNER_LOGOS } from '../../site-content';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  private readonly i18n = inject(I18nService);

  readonly isArabic = this.i18n.isArabic;
  readonly textDir = computed(() => (this.isArabic() ? 'rtl' : 'ltr'));
  readonly page = computed(() => this.i18n.content().home);
  readonly common = computed(() => this.i18n.content().common);
  readonly partnerLogos = PARTNER_LOGOS;
  openFaqIndex = 0;

  toggleFaq(index: number): void {
    this.openFaqIndex = this.openFaqIndex === index ? -1 : index;
  }
}
