import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosVitaisPacienteComponent } from './dados-vitais-paciente.component';

describe('DadosVitaisPacienteComponent', () => {
  let component: DadosVitaisPacienteComponent;
  let fixture: ComponentFixture<DadosVitaisPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosVitaisPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosVitaisPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
