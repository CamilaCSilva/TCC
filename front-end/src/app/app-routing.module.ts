import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosAtendimentoParte2Component } from './ficha-anamnese/dados-atendimento-parte2/dados-atendimento-parte2.component';
import { DadosGeraisComponent } from './ficha-anamnese/dados-gerais/dados-gerais.component';
import { DadosVitaisPacienteComponent } from './ficha-anamnese/dados-vitais-paciente/dados-vitais-paciente.component';
import { FichaAnamneseComponent } from './ficha-anamnese/ficha-anamnese.component';
import { IdentificacaoPacienteComponent } from './ficha-anamnese/identificacao-paciente/identificacao-paciente.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { MaisInfosComponent } from './mais-infos/mais-infos.component';
import { FichaAnamneseFormsComponent } from './ficha-anamnese-forms/ficha-anamnese-forms.component';
import { IdentificacaoPacienteFormComponent } from './ficha-anamnese-forms/identificacao-paciente-form/identificacao-paciente-form.component';
import { DadosAtendimentoFormComponent } from './ficha-anamnese-forms/dados-atendimento-form/dados-atendimento-form.component';
import { DadosAtendimentoComponent } from './ficha-anamnese/dados-atendimento/dados-atendimento.component';
import { DadosAtendimentoParte2FormComponent } from './ficha-anamnese-forms/dados-atendimento-parte2-form/dados-atendimento-parte2-form.component';
import { DadosVitaisPacienteFormComponent } from './ficha-anamnese-forms/dados-vitais-paciente-form/dados-vitais-paciente-form.component';
import { DadosGeraisFormComponent } from './ficha-anamnese-forms/dados-gerais-form/dados-gerais-form.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'mais-infos', component: MaisInfosComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'home/fichas',
    component: FichaAnamneseComponent,
    children: [
      {
        path: 'fichas',
        redirectTo: 'identificacao-paciente',
        pathMatch: 'full'
      },
      { //FICHA DE IDENTIFICAÇÃO
        path: 'identificacao-paciente', // child route path
        component: IdentificacaoPacienteComponent // child route component that the router renders
      },
      { //FICHA DE DADOS DE ATENDIMENTO
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
  {
    path: 'home/formularios',
    component: FichaAnamneseFormsComponent,
    children: [
      {
        path: '',
        redirectTo: 'identificacao-paciente-form',
        pathMatch: 'full'
      },
      { //FORMULÁRIO DE IDENTIFICAÇÃO
        path: 'identificacao-paciente-form',
        component: IdentificacaoPacienteFormComponent
      },
      { //FORMULÁRIO DE DADOS DE ATENDIMENTO
        path: 'identificacao-paciente-form/dados-atendimento-form',
        component: DadosAtendimentoFormComponent
      },
      {
        path: 'identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form',
        component: DadosAtendimentoParte2FormComponent
      },
      {
        path: 'identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form/dados-vitais-paciente-form',
        component: DadosVitaisPacienteFormComponent
      },
      {
        path: 'identificacao-paciente-form/dados-atendimento-form/dados-atendimento-parte2-form/dados-vitais-paciente-form/dados-gerais-form',
        component: DadosGeraisFormComponent
      }
    ]
  },
  { path: 'perfil', component: PerfilComponent },
  { path: 'perfil/editar-perfil', component: EditarPerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
