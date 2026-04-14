import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { I18nService } from '../../i18n.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly i18n = inject(I18nService);

  readonly isArabic = this.i18n.isArabic;
  readonly textDir = computed(() => (this.isArabic() ? 'rtl' : 'ltr'));
  readonly page = computed(() => this.i18n.content().contactPage);
  readonly common = computed(() => this.i18n.content().common);
  readonly contact = computed(() => this.i18n.content().contactDetails);
  readonly telHref = computed(() => `tel:${this.contact().tel.replaceAll(' ', '')}`);
  readonly phoneHref = computed(() => `tel:${this.contact().phone.replaceAll(' ', '')}`);
  readonly websiteHref = computed(() => {
    const website = this.contact().website;
    return /^https?:\/\//i.test(website) ? website : `https://${website}`;
  });
  readonly mapUrl = computed<SafeResourceUrl>(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(this.page().mapEmbedUrl)
  );
  readonly form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  isSubmitted = false;
  isSuccess = false;

  submit(): void {
    this.isSubmitted = true;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.isSuccess = false;
      return;
    }

    this.isSuccess = true;
  }

  hasError(controlName: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.touched || this.isSubmitted);
  }

  getErrorMessage(controlName: keyof typeof this.form.controls): string {
    const control = this.form.controls[controlName];
    const validation = this.page().form.validation;

    if (control.hasError('required')) {
      if (controlName === 'name') {
        return validation.nameRequired;
      }

      if (controlName === 'email') {
        return validation.emailRequired;
      }

      if (controlName === 'subject') {
        return validation.subjectRequired;
      }

      return validation.messageRequired;
    }

    if (control.hasError('email')) {
      return validation.emailInvalid;
    }

    if (control.hasError('minlength')) {
      if (controlName === 'name') {
        return validation.nameMinlength;
      }

      if (controlName === 'subject') {
        return validation.subjectMinlength;
      }

      return validation.messageMinlength;
    }

    return '';
  }
}
