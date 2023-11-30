import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FichaAnamneseModule } from './ficha-anamnese/ficha-anamnese.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { MaisInfosComponent } from './mais-infos/mais-infos.component';
import { FichaAnamneseFormsModule } from './ficha-anamnese-forms/ficha-anamnese-forms.module';

import { PerfilService } from './perfil/perfil.service';
import { FichaAnamneseService } from './ficha-anamnese/ficha-anamnese.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditarPerfilComponent,
    CadastroComponent,
    HomeComponent,
    PerfilComponent,
    HeaderComponent,
    MaisInfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    FichaAnamneseModule,
    FichaAnamneseFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    HttpClientModule,
    PerfilService,
    FichaAnamneseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
