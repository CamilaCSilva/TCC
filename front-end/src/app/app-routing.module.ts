import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosAtendimentoParte2Component } from './ficha-anamnese/dados-atendimento-parte2/dados-atendimento-parte2.component';
import { DadosAtendimentoComponent } from './ficha-anamnese/dados-atendimento/dados-atendimento.component';
import { FichaAnamneseComponent } from './ficha-anamnese/ficha-anamnese.component';
import { IdentificacaoPacienteComponent } from './ficha-anamnese/identificacao-paciente/identificacao-paciente.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'ficha', component: FichaAnamneseComponent },
  { path: 'ficha/identificacao-paciente', component: IdentificacaoPacienteComponent },
  { path: 'ficha/dados-atendimento', component: DadosAtendimentoComponent },
  { path: 'ficha/dados-atendimento-parte2', component: DadosAtendimentoParte2Component }
  // { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
