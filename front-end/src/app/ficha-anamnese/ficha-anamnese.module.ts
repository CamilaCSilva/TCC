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

import { FichaAnamneseComponent } from './ficha-anamnese.component';
import { DadosAtendimentoComponent } from './dados-atendimento/dados-atendimento.component';
import { DadosAtendimentoParte2Component } from './dados-atendimento-parte2/dados-atendimento-parte2.component';
import { DadosGeraisComponent } from './dados-gerais/dados-gerais.component';
import { DadosVitaisPacienteComponent } from './dados-vitais-paciente/dados-vitais-paciente.component';
import { IdentificacaoPacienteComponent } from './identificacao-paciente/identificacao-paciente.component';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FichaAnamneseComponent,
    DadosAtendimentoComponent,
    DadosAtendimentoParte2Component,
    DadosGeraisComponent,
    DadosVitaisPacienteComponent,
    IdentificacaoPacienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' },
  ]
})
export class FichaAnamneseModule { }
