import { CommonModule } from '@angular/common';
import { Component, DestroyRef, computed, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs/operators';

import { I18nService } from '../../i18n.service';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss'
})
export class SiteHeaderComponent {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly i18n = inject(I18nService);

  readonly isArabic = this.i18n.isArabic;
  readonly header = computed(() => this.i18n.content().header);
  readonly navItems = computed(() => this.header().nav);
  mobileMenuOpen = false;
  currentUrl = this.router.url;

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.currentUrl = this.router.url;
        this.mobileMenuOpen = false;
      });
  }

  isActive(path: string): boolean {
    return path === '/' ? this.currentUrl === '/' : this.currentUrl.startsWith(path);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleLanguage(): void {
    this.i18n.toggleLanguage();
  }
}
