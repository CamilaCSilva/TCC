import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MostrarSenhaComponent } from './mostrar-senha/mostrar-senha.component';


@NgModule({
  declarations: [
    FooterComponent,
    MostrarSenhaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    MostrarSenhaComponent
  ]
})
export class SharedModule { }
