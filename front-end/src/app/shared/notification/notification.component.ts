import { Component, Input, OnChanges } from '@angular/core';
import { Notification } from '../shared.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

  @Input() notificacao: Notification;

  notifica = {
    mensagem: '',
    classe: '',
    validacao: false
  };

  mostrarNotificacao(){
    console.log('entrou');
    this.notifica = {
      mensagem: this.notificacao.mensagem,
      classe: this.notificacao.classe,
      validacao: this.notificacao.validacao
    };
    this.limparNotificacao();
  }

  limparNotificacao() {
    setTimeout(() => {
      this.notifica = {
        mensagem: '',
        classe: '',
        validacao: false
      };
    }, 2000);
  }
}
