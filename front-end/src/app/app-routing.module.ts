import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosAtendimentoParte2Component } from './ficha-anamnese/dados-atendimento-parte2/dados-atendimento-parte2.component';
import { DadosAtendimentoComponent } from './ficha-anamnese/dados-atendimento/dados-atendimento.component';
import { DadosGeraisComponent } from './ficha-anamnese/dados-gerais/dados-gerais.component';
import { DadosVitaisPacienteComponent } from './ficha-anamnese/dados-vitais-paciente/dados-vitais-paciente.component';
import { FichaAnamneseComponent } from './ficha-anamnese/ficha-anamnese.component';
import { IdentificacaoPacienteComponent } from './ficha-anamnese/identificacao-paciente/identificacao-paciente.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'login/ficha',
    component: FichaAnamneseComponent,
    children: [
      {
        path: 'identificacao-paciente', // child route path
        component: IdentificacaoPacienteComponent // child route component that the router renders
      },
      {
        path: 'identificacao-paciente/dados-atendimento',
        component: DadosAtendimentoComponent
      },
      {
        path: 'identificacao-paciente/dados-atendimento/dados-atendimento-parte2',
        component: DadosAtendimentoParte2Component
      },
      {
        path: 'identificacao-paciente/dados-atendimento/dados-atendimento-parte2/dados-vitais-paciente',
        component: DadosVitaisPacienteComponent
      },
      {
        path: 'identificacao-paciente/dados-atendimento/dados-atendimento-parte2/dados-vitais-paciente/dados-gerais',
        component: DadosGeraisComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
