import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  path: string = 'perfil/editar-perfil';

  string = 'Perfil'

  usuario: any = {
    nome: 'Isabela',
    sexo: 'F',
    funcao: 'Profissional de Saúde',
    docmentro_trabalho: 78965,
    cpf: '123.456.789.10',
    unidade_atendimento: 'Hospital Antônio Moreira da Costa',
    celular: '(35)99123-4567'
  }

  obj:any;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.obj = this.http.get("http://127.0.0.1:8000/profissionaisdesaude/12345678910/").subscribe(
      data => this.obj = data
    )

  }

  editar(){
    this.router.navigateByUrl(this.path);
  }


}
