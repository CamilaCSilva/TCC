import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DadosAtendimentoParte2FormComponent } from './dados-atendimento-parte2-form.component';


describe('DadosAtendimentoParte2Component', () => {
  let component: DadosAtendimentoParte2FormComponent;
  let fixture: ComponentFixture<DadosAtendimentoParte2FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosAtendimentoParte2FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosAtendimentoParte2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
