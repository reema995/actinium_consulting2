import { Component, OnInit, Inject, PLATFORM_ID, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { SiteHeaderComponent } from './shared/site-header/site-header.component';
import { SiteFooterComponent } from './shared/site-footer/site-footer.component';
import { ScrollTopComponent } from './shared/scroll-top/scroll-top.component';
import { I18nService } from './i18n.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent, ScrollTopComponent],
  template: `
    <div class="flex min-h-screen flex-col relative">
      <app-site-header />
      <main class="flex-grow">
        <router-outlet />
      </main>
      <app-site-footer />
      <app-scroll-top />
    </div>
  `
})
export class AppComponent implements OnInit {
  private readonly i18n = inject(I18nService);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800,
        once: true,
        offset: 50,
        easing: 'ease-out-cubic'
      });
    }
  }
}
