import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* *********************************************** */
/* Importando a configuração de algumas linguagens */
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import localeES from '@angular/common/locales/es';
import localeDE from '@angular/common/locales/de';
import localeFR from '@angular/common/locales/fr';
registerLocaleData(localePT);
registerLocaleData(localeES);
registerLocaleData(localeDE);
registerLocaleData(localeFR);
/* *********************************************** */

import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { FichaAnamneseFormsComponent } from './ficha-anamnese-forms.component';
import { IdentificacaoPacienteFormComponent } from './identificacao-paciente-form/identificacao-paciente-form.component';
import { DadosAtendimentoFormComponent } from './dados-atendimento-form/dados-atendimento-form.component';
import { DadosAtendimentoParte2FormComponent } from './dados-atendimento-parte2-form/dados-atendimento-parte2-form.component';
import { DadosVitaisPacienteFormComponent } from './dados-vitais-paciente-form/dados-vitais-paciente-form.component';
import { DadosGeraisFormComponent } from './dados-gerais-form/dados-gerais-form.component';


@NgModule({
  declarations: [
    FichaAnamneseFormsComponent,
    IdentificacaoPacienteFormComponent,
    DadosAtendimentoFormComponent,
    DadosAtendimentoParte2FormComponent,
    DadosVitaisPacienteFormComponent,
    DadosGeraisFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    FichaAnamneseFormsComponent,
    IdentificacaoPacienteFormComponent,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' },
  ]
})
export class FichaAnamneseFormsModule { }
