import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosVitaisPacienteFormComponent } from './dados-vitais-paciente-form.component';

describe('DadosVitaisPacienteFormComponent', () => {
  let component: DadosVitaisPacienteFormComponent;
  let fixture: ComponentFixture<DadosVitaisPacienteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosVitaisPacienteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosVitaisPacienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
