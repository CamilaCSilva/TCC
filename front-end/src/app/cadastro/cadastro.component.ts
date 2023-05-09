import { Component } from '@angular/core';
import { CadastroService } from './cadastro.service';
import { CadastroInfo, CadastroInfoArray } from './cadastro.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  path: string = 'login';
  string = 'Faça seu cadastro!'
  nome_completo: string;
  campo_escolha: string = 'COREN';
  documento_trabalho: string;
  cpf: string;
  unidade_de_atendimento: string;
  celular: string
  senha: string;
  senha_confirmacao: string;
  testResult: boolean = false;
  cadastroInfo: CadastroInfo;
  cadastroInfoArray: CadastroInfoArray;


  constructor(private router: Router, private cadastroService: CadastroService,  private http: HttpClient) {}

  obj:any;

  ngOnInit(): void {}

  cadastrar() {

    this.verificaDados();
    
    var send_data = {"nome_completo": this.nome_completo, "campo_escolha": this.campo_escolha, 
    "documento_trabalho": this.documento_trabalho, "cpf": this.cpf, "unidade_de_atendimento": this.unidade_de_atendimento,
    "celular":this.celular, "senha": this.senha_confirmacao}

    console.log(this.unidade_de_atendimento)

    if(this.testResult && this.documento_trabalho && this.unidade_de_atendimento) {
      this.obj = this.http.post("http://127.0.0.1:8000/profissionaisdesaude/", send_data).subscribe(data => this.obj = data)

      this.router.navigateByUrl(this.path);
    }
  }

  setCadastroInfo(cadastroInfoArray: CadastroInfoArray): any {
    this.cadastroService.setCadastroInfo(cadastroInfoArray);
  }

  onAreaChange(campo_escolha: string) {
    if(campo_escolha == 'COREN') { console.log('COREN'); }
    else if(campo_escolha == 'CRM') { console.log('CRM'); }
    else if(campo_escolha == 'DRF') { console.log('DRF'); }
  }

  getArea(event: Event) {
    this.campo_escolha = (event.target as HTMLInputElement).value;
    return this.campo_escolha;
  }

  private verificaDados() {
    if(this.nome_completo && this.nome_completo.length < 6 && this.nome_completo.match(/([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+)|([a-záàâãéèêíïóôõöúçñ ]+)/) == null) {
      alert('Nome incompleto');
      throw new Error('Nome incompleto');
    }
    else if (this.cpf && this.cpf.length < 11 || !this.cpf.match(new RegExp('^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$'))) {
      alert('CPF incompleto');
      throw new Error('CPF incompleto');
    }
    else if (this.celular && this.celular.match(/(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))/) == null){
      alert('Celular no formato inesperado');
      throw new Error('Celular incorreto');
    }
    else if (this.senha && !this.senha.match(new RegExp('^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$'))){
      alert('Senha incompleta');
      throw new Error('Senha incompleta');
    }
    else {
      this.testResult = true;
    }
  }
}
