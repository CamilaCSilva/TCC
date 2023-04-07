import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FichaAnamneseComponent } from './ficha-anamnese/ficha-anamnese.component';
import { IdentificacaoPacienteComponent } from './ficha-anamnese/identificacao-paciente/identificacao-paciente.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RouterModule } from '@angular/router';
import { DadosAtendimentoComponent } from './ficha-anamnese/dados-atendimento/dados-atendimento.component';
import { DadosAtendimentoParte2Component } from './ficha-anamnese/dados-atendimento-parte2/dados-atendimento-parte2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FichaAnamneseComponent,
    IdentificacaoPacienteComponent,
    PerfilComponent,
    DadosAtendimentoComponent,
    DadosAtendimentoParte2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
