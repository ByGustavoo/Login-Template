import { RouterModule } from '@angular/router';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { merge } from 'rxjs';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatSelectModule } from '@angular/material/select';

export const DATE_FORMAT = {
  display: {
    dateInput: 'DD/MM/YYYY'
  }
};

@Component({
  standalone: true,
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrl: './criar-conta.component.scss',
  imports: [
    RouterModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    NgxMaskDirective,
    MatSelectModule
  ],
  providers: [
    provideNgxMask(),
    provideNativeDateAdapter(),
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ]
})

export class CriarContaComponent {
  private _formBuilder = inject(FormBuilder);
  readonly email = new FormControl('', [Validators.required, Validators.email]);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isEditable = false;

  emailError = signal('');

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.emailErrorMessage());
  }

  emailErrorMessage() {
    if (this.email.hasError('required')) {
      this.emailError.set('Por favor, digite um e-mail!');
    } else if (this.email.hasError('email')) {
      this.emailError.set('Por favor, digite um e-mail válido!');
    } else {
      this.emailError.set('');
    }
  }
}
