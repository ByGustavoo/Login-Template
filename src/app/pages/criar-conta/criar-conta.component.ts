import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

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
    CommonModule,
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
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ]
})
export class CriarContaComponent {
    isEditable = true;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

    constructor(private _formBuilder: FormBuilder) {
      this.firstFormGroup = this._formBuilder.group({
        nome: ['', Validators.required],
        sobrenome: ['', Validators.required],
        dataNascimento: ['', Validators.required],
        genero: ['', Validators.required],
        estadoCivil: ['', Validators.required],
        nacionalidade: ['', Validators.required],
        cpf: ['', [Validators.required]],
        rg: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        telefone: ['', Validators.required],
        profissao: ['', Validators.required],
        empresa: ['', Validators.required],
      });

      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required],
    });
  }
}
