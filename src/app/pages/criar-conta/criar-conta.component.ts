import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';


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
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT },
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
