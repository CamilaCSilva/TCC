import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdentificacaoPacienteFormComponent } from './identificacao-paciente-form.component';


describe('IdentificacaoPacienteComponent', () => {
  let component: IdentificacaoPacienteFormComponent;
  let fixture: ComponentFixture<IdentificacaoPacienteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificacaoPacienteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificacaoPacienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
