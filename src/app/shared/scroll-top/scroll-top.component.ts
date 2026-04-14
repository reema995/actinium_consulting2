import { Component, HostListener, Inject, PLATFORM_ID, computed, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { I18nService } from '../../i18n.service';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="scrollToTop()"
      [ngClass]="{
        'opacity-100 translate-y-0 pointer-events-auto hover:-translate-y-1 hover:shadow-2xl hover:bg-[#131929]': isVisible,
        'opacity-0 translate-y-10 pointer-events-none': !isVisible
      }"
      class="fixed bottom-6 right-6 z-[999] flex h-12 w-12 items-center justify-center rounded-full bg-[#1d2858] text-white shadow-xl transition-all duration-500 ease-in-out focus:outline-none md:bottom-10 md:right-10 md:h-14 md:w-14"
      [attr.aria-label]="scrollLabel()"
    >
      <i class="fa-solid fa-arrow-up text-lg md:text-xl"></i>
    </button>
  `,
})
export class ScrollTopComponent {
  private readonly i18n = inject(I18nService);

  isVisible = false;
  isBrowser: boolean;
  readonly scrollLabel = computed(() => this.i18n.content().common.scrollToTop);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      if (window.scrollY > 400) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }
    }
  }

  scrollToTop() {
    if (this.isBrowser) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
