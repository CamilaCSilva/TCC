import { Component } from '@angular/core';
import { CadastroService } from './cadastro.service';
import { Router } from '@angular/router';
import { PerfilInfo } from '../models/perfil.model';
import { Validacao } from '../models/validacao.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  path: string = 'login';
  string = 'Faça seu cadastro!'
  senhaConfirmacao: string;
  areaAtuacao: string;
  cadastroInfo: PerfilInfo;

  constructor(private router: Router, private cadastroService: CadastroService, private validacao: Validacao) {}

  ngOnInit(): void {}

  cadastrar(cadastro: any) {
    this.cadastroInfo = {
      nome_completo: cadastro.value.nomeCompleto,
      campo_escolha: cadastro.value.seletor,
      documento_trabalho: cadastro.value.doc,
      cpf: cadastro.value.cpf,
      unidade_de_atendimento: cadastro.value.unidadeAtendimento,
      celular: cadastro.value.celular,
      senha: cadastro.value.senha,
    };
    if(this.validacao.verificaDadosPerfil(this.cadastroInfo)) {
      if(cadastro.senha != cadastro.value.confirmaSenha){
        alert('As senha não são iguais');
        throw new Error('As senha não são iguais');
      }
      else{
        this.setCadastroInfo();
        this.router.navigateByUrl(this.path);
      }
    }
  }

  setCadastroInfo() {
    this.cadastroService.setCadastroInfo(this.cadastroInfo).subscribe(
      success => console.log('Sucesso!'),
      error => console.log(error),
      () => console.log('request completo')
    );
  }

  onAreaChange(areaAtuacao: string) {
    if(areaAtuacao == 'CRM') { console.log('Médico(a)'); }
    else if(areaAtuacao == 'COREN') { console.log('Enfermeiro(a)'); }
    else if(areaAtuacao == 'DRF') { console.log('Paramédico(a)'); }
  }

  getArea(event: Event) {
    this.areaAtuacao = (event.target as HTMLInputElement).value;
    return this.areaAtuacao;
  }
}
