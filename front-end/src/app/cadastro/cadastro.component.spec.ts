import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CadastroComponent } from './cadastro.component';
import { CadastroService } from './cadastro.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { EMPTY, of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { PerfilInfo } from '../models/perfil.model';

describe('CadastroComponent', () => {
  let component: CadastroComponent;
  let cadastroService: CadastroService;
  let fixture: ComponentFixture<CadastroComponent>;
  let areaAtuacaoMock: string[];
  let debugElement: DebugElement;

  const cadastroServiceMock = {
    setCadastroInfo: jasmine.createSpy('setCadastroInfo').and.returnValue(of(true))
  }

  const cadastroInfoMock = {
    cpf: '123.456.789-10',
    areaAtuacao: 'COREN',
    nomeCompleto: 'Marcela Dias',
    celular: '35 98453-2456',
    doc: '134567',
    unidadeAtendimento: 'HMAC',
    senha: 'Testando@1',
  };

  const cadastroInfoMock1: PerfilInfo = {
    cpf: cadastroInfoMock.cpf,
    campo_escolha: cadastroInfoMock.areaAtuacao,
    nome_completo: cadastroInfoMock.nomeCompleto,
    celular: cadastroInfoMock.celular,
    documento_trabalho: cadastroInfoMock.doc,
    unidade_de_atendimento: cadastroInfoMock.unidadeAtendimento,
    senha: cadastroInfoMock.senha,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [ CadastroComponent ],
      providers: [
        { provide: CadastroService, useValue: cadastroServiceMock }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroComponent);
    component = fixture.componentInstance;
    cadastroService = TestBed.inject(CadastroService) as jasmine.SpyObj<CadastroService>;
    // debugElement = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xdescribe('cadastrar', () => {
    it('should create a new user', () => {
      const setCadastroInfoSpy = spyOn(component, 'setCadastroInfo');
      // formSpy.calls.reset();
      // const formTitleSpy = spyOn(component.formTitleElement.nativeElement, 'scrollIntoView');
      // formTitleSpy.calls.reset();

      // When
      component.cadastrar();

      // Then
      expect(component.cadastroInfo.cpf).toEqual(cadastroInfoMock.cpf);
      expect(component.cadastroInfo.campo_escolha).toEqual(cadastroInfoMock.areaAtuacao);
      expect(component.cadastroInfo.nome_completo).toEqual(cadastroInfoMock.nomeCompleto);
      expect(component.cadastroInfo.celular).toEqual(cadastroInfoMock.celular);
      expect(component.cadastroInfo.documento_trabalho).toEqual(cadastroInfoMock.doc);
      expect(component.cadastroInfo.unidade_de_atendimento).toEqual(cadastroInfoMock.unidadeAtendimento);
      expect(component.cadastroInfo.senha).toEqual(cadastroInfoMock.senha);
      expect(setCadastroInfoSpy).toHaveBeenCalledWith(cadastroInfoMock1);
      //     this.router.navigateByUrl(this.path);
    });
  });

  fdescribe('setCadastroInfo', () => {
    it('should call the cadastroService', () => {
      // When
      component.setCadastroInfo(cadastroInfoMock1);

      // Then
      cadastroService.setCadastroInfo(cadastroInfoMock1).subscribe((res) => {
        expect(res).toEqual(true);
      });
    });
  });

  xdescribe('onAreaChange',() => {
    it('should get the occupation area chosen', () => {
      // When
      component.onAreaChange('COREN');

      // Then
      expect(component.areaAtuacao).toEqual('COREN');
    });
  });
  // onAreaChange(areaAtuacao: string) {
  //   if(areaAtuacao == 'CRM') { this.areaAtuacao = this.areaAtuacao; console.log('Médico(a)'); }
  //   else if(areaAtuacao == 'COREN') { this.areaAtuacao = this.areaAtuacao; console.log('Enfermeiro(a)'); }
  //   else if(areaAtuacao == 'DRF') { this.areaAtuacao = this.areaAtuacao; console.log('Paramédico(a)'); }
  // }


  xdescribe('getArea', () => {
    it('should get the occupation area chosen', () => {
      // Given
      // const event = fixture.nativeElement.querySelector('#areaAtuacao');
      // const event = { target: { value: 'CRM' }} as Event;
      // const mockEvent: Event = <Event><any> {
      //   target: {
      //     value: 'CRM'
      //   }
      // };
      // const event = fixture.componentInstance.getArea({target: { value:'CRM' }}) as unknown as Event;
      const event = debugElement.query(
        By.css('#areaAtuacao')
      );

      // When
      // component.getArea(event);

      // // Then
      // expect(component.areaAtuacao).toEqual(event.target.value);
    });
  });

});
