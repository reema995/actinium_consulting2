import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeaderComponent } from './shared/site-header/site-header.component';
import { SiteFooterComponent } from './shared/site-footer/site-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent],
  template: `
    <div class="flex min-h-screen flex-col">
      <app-site-header />
      <main class="flex-grow">
        <router-outlet />
      </main>
      <app-site-footer />
    </div>
  `
})
export class AppComponent {}
