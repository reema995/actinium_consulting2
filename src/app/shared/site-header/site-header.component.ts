import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs/operators';

import { NAV_ITEMS } from '../../site-content';

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

  readonly navItems = NAV_ITEMS;
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
}
