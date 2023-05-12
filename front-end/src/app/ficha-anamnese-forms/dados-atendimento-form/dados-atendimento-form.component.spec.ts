import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DadosAtendimentoFormComponent } from './dados-atendimento-form.component';


describe('DadosAtendimentoComponent', () => {
  let component: DadosAtendimentoFormComponent;
  let fixture: ComponentFixture<DadosAtendimentoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosAtendimentoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosAtendimentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
