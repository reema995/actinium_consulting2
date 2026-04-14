import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { I18nService } from '../../i18n.service';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services-page.component.html'
})
export class ServicesPageComponent {
  private readonly i18n = inject(I18nService);

  readonly isArabic = this.i18n.isArabic;
  readonly textDir = computed(() => (this.isArabic() ? 'rtl' : 'ltr'));
  readonly page = computed(() => this.i18n.content().services);
}
