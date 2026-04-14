import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { I18nService } from '../../i18n.service';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about-page.component.html'
})
export class AboutPageComponent {
  private readonly i18n = inject(I18nService);

  readonly isArabic = this.i18n.isArabic;
  readonly textDir = computed(() => (this.isArabic() ? 'rtl' : 'ltr'));
  readonly page = computed(() => this.i18n.content().about);
  readonly approachSteps = computed(() => this.i18n.content().home.approachSteps);
}
