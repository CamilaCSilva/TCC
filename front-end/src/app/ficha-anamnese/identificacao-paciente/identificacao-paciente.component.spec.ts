import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacaoPacienteComponent } from './identificacao-paciente.component';

describe('IdentificacaoPacienteComponent', () => {
  let component: IdentificacaoPacienteComponent;
  let fixture: ComponentFixture<IdentificacaoPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificacaoPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificacaoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
