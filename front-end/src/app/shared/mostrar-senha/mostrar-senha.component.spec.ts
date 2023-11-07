import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarSenhaComponent } from './mostrar-senha.component';

describe('MostrarSenhaComponent', () => {
  let component: MostrarSenhaComponent;
  let fixture: ComponentFixture<MostrarSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarSenhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
