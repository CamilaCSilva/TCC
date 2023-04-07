import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosAtendimentoParte2Component } from './dados-atendimento-parte2.component';

describe('DadosAtendimentoParte2Component', () => {
  let component: DadosAtendimentoParte2Component;
  let fixture: ComponentFixture<DadosAtendimentoParte2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosAtendimentoParte2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosAtendimentoParte2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
