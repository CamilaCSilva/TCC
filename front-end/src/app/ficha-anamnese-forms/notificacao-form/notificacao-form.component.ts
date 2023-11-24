import { Component, Input, OnChanges } from '@angular/core';
import { Notification } from 'src/app/shared/shared.model';

@Component({
  selector: 'app-notificacao-form',
  templateUrl: './notificacao-form.component.html',
  styleUrls: ['./notificacao-form.component.scss']
})
export class NotificacaoFormComponent implements OnChanges {
  @Input() notificacao: Notification;

  notifica = {
    mensagem: '',
    classe: '',
    validacao: false
  };

  ngOnChanges() {
    this.mostrarNotificacao();
  }

  mostrarNotificacao(){
    this.notifica = {
      mensagem: this.notificacao.mensagem,
      classe: this.notificacao.classe,
      validacao: this.notificacao.validacao
    };
  }
}
