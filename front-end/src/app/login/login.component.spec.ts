import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // xdescribe('entrar()', () => {
  //   it('should show message', () => {
  //     // Given
  //     const name = 'Camila';

  //     // When
  //     component.entrar(name);

  //     // Then
  //     expect(component.mensagem).toEqual("Bem vinda(o), " + name + "!");
  //   });
  // });
});
