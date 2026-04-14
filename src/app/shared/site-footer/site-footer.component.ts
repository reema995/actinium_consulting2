import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { I18nService } from '../../i18n.service';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss'
})
export class SiteFooterComponent {
  private readonly i18n = inject(I18nService);

  readonly isArabic = this.i18n.isArabic;
  readonly textDir = computed(() => (this.isArabic() ? 'rtl' : 'ltr'));
  readonly footer = computed(() => this.i18n.content().footer);
  readonly contact = computed(() => this.i18n.content().contactDetails);
  readonly common = computed(() => this.i18n.content().common);
  readonly phoneHref = computed(() => `tel:${this.contact().phone.replaceAll(' ', '')}`);
  readonly telDisplay = computed(() => this.formatLabeledValue(this.common().telLabel, this.contact().tel));
  readonly mobileDisplay = computed(() => this.formatLabeledValue(this.common().mobileLabel, this.contact().phone));
  readonly year = new Date().getFullYear();

  private formatLabeledValue(label: string, value: string): string {
    return this.isArabic() ? `${label}:\u200E ${value}` : `${label}: ${value}`;
  }
}
