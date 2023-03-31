import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaAnamneseComponent } from './ficha-anamnese.component';

describe('FichaAnamneseComponent', () => {
  let component: FichaAnamneseComponent;
  let fixture: ComponentFixture<FichaAnamneseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaAnamneseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaAnamneseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
