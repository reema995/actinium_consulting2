import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CONTACT_DETAILS, NAV_ITEMS } from '../../site-content';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './site-footer.component.html'
})
export class SiteFooterComponent {
  readonly navItems = NAV_ITEMS;
  readonly contact = CONTACT_DETAILS;
  readonly phoneHref = `tel:${CONTACT_DETAILS.phone.replaceAll(' ', '')}`;
  readonly year = new Date().getFullYear();
}
