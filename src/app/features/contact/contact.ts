import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  form: FormGroup;
  submitting = false;
  submitted = false;
  submitError = false;

  private readonly apiUrl = 'https://hug3i1blwk.execute-api.us-east-1.amazonaws.com/contact';

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;
    this.submitError = false;

    this.http.post(this.apiUrl, this.form.value).subscribe({
      next: () => {
        this.submitting = false;
        this.submitted = true;
        this.form.reset();
      },
      error: (err: HttpErrorResponse) => {
        console.error(err);
        this.submitting = false;
        this.submitError = true;
      },
    });
  }
}