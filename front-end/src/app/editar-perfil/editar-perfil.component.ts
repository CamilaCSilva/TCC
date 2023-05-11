import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilInfo, PerfilInfoArray } from './editar-perfil.model';
import { EditarPerfilService } from './editar-perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {

  path: string = 'perfil';
  string = 'Edição Perfil';
  nomeCompleto: string;
  areaAtuacao: string = 'medico';
  crmCorenDrf: string;
  cpf: string;
  unidadeAtendimento: string;
  celular: string
  testResult: boolean = false;
  perfilInfo: PerfilInfo;
  perfilInfoArray: PerfilInfoArray;

  usuario = {
    nome: 'Isabela',
    funcao: 'Profissional de Saúde',
    docmentro_trabalho: 78965,
    cpf: '123.456.789-10',
    unidade_atendimento: 'Hospital Antônio Moreira da Costa',
    celular: '(35)99123-4567'
  };

  constructor(private router: Router, private editarPerfilService: EditarPerfilService) { }

  ngOnInit(): void {}

  salvar() {
    // this.verificaDados();
    // if(this.testResult) {
      this.router.navigateByUrl(this.path);
      // this.perfilInfo = {
      //   nomeCompleto: this.nomeCompleto,
      //   campo_escolha: this.areaAtuacao,
      //   documentoTrabalho: this.crmCorenDrf,
      //   cpf: this.cpf,
      //   unidadeDeAtendimento: this.unidadeAtendimento,
      //   telefone: this.celular
      // };
      // this.perfilInfoArray = [this.perfilInfo];
      // this.editarPerfilService.setPerfilInfo(this.perfilInfoArray);
    // }
  }

  onAreaChange(areaAtuacao: string) {
    if(areaAtuacao == 'medico') { console.log('Médico(a)'); }
    else if(areaAtuacao == 'enfermeiro') { console.log('Enfermeiro(a)'); }
    else if(areaAtuacao == 'paramedico') { console.log('Paramédico(a)'); }
  }

  getArea(event: Event) {
    this.areaAtuacao = (event.target as HTMLInputElement).value;
    return this.areaAtuacao;
  }

  // private verificaDados() {
  //   if(this.nomeCompleto && this.nomeCompleto.length < 6 && this.nomeCompleto.match(/([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+)|([a-záàâãéèêíïóôõöúçñ ]+)/) == null) {
  //     alert('Nome incompleto');
  //     throw new Error('Nome incompleto');
  //   }
  //   else if (this.cpf && this.cpf.length < 11 || !this.cpf.match(new RegExp('^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$'))) {
  //     alert('CPF incompleto');
  //     throw new Error('CPF incompleto');
  //   }
  //   else if (this.celular && this.celular.match(/(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))/) == null){
  //     alert('Celular no formato inesperado');
  //     throw new Error('Celular incorreto');
  //   }
  //   else {
  //     this.testResult = true;
  //   }
  // }

}
