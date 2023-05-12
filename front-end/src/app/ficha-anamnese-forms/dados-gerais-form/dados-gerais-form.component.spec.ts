import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosGeraisFormComponent } from './dados-gerais-form.component';

describe('DadosGeraisComponent', () => {
  let component: DadosGeraisFormComponent;
  let fixture: ComponentFixture<DadosGeraisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosGeraisFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosGeraisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
