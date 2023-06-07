import { TestBed } from '@angular/core/testing';

import { CadastroService } from './cadastro.service';
import { PerfilInfo } from '../models/perfil.model';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

describe('CadastroService', () => {
  let service: CadastroService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setCadastroInfo', () => {
    it('should post a new user', () => {
      // Given
      const cadastroInfoMock: PerfilInfo = {
        cpf: '123.456.789-10',
        campo_escolha: 'COREN',
        nome_completo: 'Marcela Dias',
        celular: '35 98453-2456',
        documento_trabalho: '134567',
        unidade_de_atendimento: 'HMAC',
        password: 'Testando@1',
      };
      const urlMock = 'medvida.up.railway.app/profissionaldesaude/';

      // When
      service.setCadastroInfo(cadastroInfoMock);
      const req = httpMock.expectOne(`${urlMock}`);

      //Then
      expect(req.request.method).toEqual('POST');
      req.flush([]);
    });
  });
});
