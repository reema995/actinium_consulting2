import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { CONTACT_DETAILS } from '../../site-content';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contact-page.component.html'
})
export class ContactPageComponent {
  private readonly formBuilder = inject(FormBuilder);

  readonly contact = CONTACT_DETAILS;
  readonly phoneHref = `tel:${CONTACT_DETAILS.phone.replaceAll(' ', '')}`;
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
}
