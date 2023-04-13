import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosAtendimentoParte2Component } from './ficha-anamnese/dados-atendimento-parte2/dados-atendimento-parte2.component';
import { DadosAtendimentoComponent } from './ficha-anamnese/dados-atendimento/dados-atendimento.component';
import { DadosGeraisComponent } from './ficha-anamnese/dados-gerais/dados-gerais.component';
import { DadosVitaisPacienteComponent } from './ficha-anamnese/dados-vitais-paciente/dados-vitais-paciente.component';
import { FichaAnamneseComponent } from './ficha-anamnese/ficha-anamnese.component';
import { IdentificacaoPacienteComponent } from './ficha-anamnese/identificacao-paciente/identificacao-paciente.component';
import { LoginComponent } from './login/login.component';
import { EditarPerfilComponent } from './edtar-perfil/editar-perfil.component';
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'editar-perfil',component: EditarPerfilComponent},
  { path: 'cadastro', component: FormularioCadastroComponent},
  { path: 'home', component: HomeComponent },
  // { path: 'perfil', component: PerfilComponent},
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
