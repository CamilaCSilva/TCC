import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosAtendimentoComponent } from './dados-atendimento.component';

describe('DadosAtendimentoComponent', () => {
  let component: DadosAtendimentoComponent;
  let fixture: ComponentFixture<DadosAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosAtendimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
