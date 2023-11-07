import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-senha',
  templateUrl: './mostrar-senha.component.html',
  styleUrls: ['./mostrar-senha.component.scss']
})
export class MostrarSenhaComponent {

  @Input() pass: any;

  iconeMostrar: boolean = false;
  iconeEsconder: boolean = true;

  mostrarSenha(event: any) {
    if(event.type == 'password') {
      event.type = 'text';
      this.iconeMostrar = true;
      this.iconeEsconder = false;
    } else {
      event.type = 'password';
      this.iconeMostrar = false;
      this.iconeEsconder = true;
    }
  }
}
