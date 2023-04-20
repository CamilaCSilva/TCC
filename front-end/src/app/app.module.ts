import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FichaAnamneseComponent } from './ficha-anamnese/ficha-anamnese.component';
import { IdentificacaoPacienteComponent } from './ficha-anamnese/identificacao-paciente/identificacao-paciente.component';
import { RouterModule } from '@angular/router';
import { DadosAtendimentoComponent } from './ficha-anamnese/dados-atendimento/dados-atendimento.component';
import { DadosAtendimentoParte2Component } from './ficha-anamnese/dados-atendimento-parte2/dados-atendimento-parte2.component';
import { DadosVitaisPacienteComponent } from './ficha-anamnese/dados-vitais-paciente/dados-vitais-paciente.component';
import { DadosGeraisComponent } from './ficha-anamnese/dados-gerais/dados-gerais.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { HomeComponent } from './home/home.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FichaAnamneseComponent,
    IdentificacaoPacienteComponent,
    EditarPerfilComponent,
    DadosAtendimentoComponent,
    DadosAtendimentoParte2Component,
    DadosVitaisPacienteComponent,
    DadosGeraisComponent,
    FooterComponent,
    HeaderComponent,
    FormularioCadastroComponent,
    HomeComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
