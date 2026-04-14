import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

import { Locale, SITE_CONTENT, SiteContent } from './site-content';

const LANGUAGE_STORAGE_KEY = 'actinium-language';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  private readonly routePath = signal(this.normalizePath(this.router.url));
  readonly locale = signal<Locale>(this.getInitialLocale());
  readonly isArabic = computed(() => this.locale() === 'ar');
  readonly content = computed<SiteContent>(() => SITE_CONTENT[this.locale()]);

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.routePath.set(this.normalizePath(event.urlAfterRedirects));
      }
    });

    effect(() => {
      const locale = this.locale();
      const content = this.content();
      const currentPath = this.routePath();
      const pageTitle = content.seo.titles[currentPath] ?? content.seo.titles['/'];

      this.document.documentElement.lang = locale;
      this.document.documentElement.dir = 'ltr';
      this.title.setTitle(pageTitle);
      this.meta.updateTag({ name: 'description', content: content.seo.description });

      if (isPlatformBrowser(this.platformId)) {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
      }
    });
  }

  toggleLanguage(): void {
    this.locale.update((current) => (current === 'en' ? 'ar' : 'en'));
  }

  setLanguage(locale: Locale): void {
    this.locale.set(locale);
  }

  private getInitialLocale(): Locale {
    if (!isPlatformBrowser(this.platformId)) {
      return 'en';
    }

    const savedLocale = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLocale === 'ar' || savedLocale === 'en') {
      return savedLocale;
    }

    return navigator.language.toLowerCase().startsWith('ar') ? 'ar' : 'en';
  }

  private normalizePath(url: string): string {
    const path = url.split('?')[0]?.split('#')[0] ?? '/';
    return path || '/';
  }
}
