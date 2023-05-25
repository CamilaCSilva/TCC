import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FichaAnamneseFormsComponent } from './ficha-anamnese-forms.component';

describe('FichaAnamneseComponent', () => {
  let component: FichaAnamneseFormsComponent;
  let fixture: ComponentFixture<FichaAnamneseFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaAnamneseFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaAnamneseFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
