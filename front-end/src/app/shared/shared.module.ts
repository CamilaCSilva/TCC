import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MostrarSenhaComponent } from './mostrar-senha/mostrar-senha.component';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    FooterComponent,
    MostrarSenhaComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    MostrarSenhaComponent,
    NotificationComponent
  ]
})
export class SharedModule { }
