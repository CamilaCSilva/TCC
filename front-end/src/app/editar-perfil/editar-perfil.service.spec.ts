import { TestBed } from '@angular/core/testing';

import { EditarPerfilService } from './editar-perfil.service';

describe('EditarPerfilService', () => {
  let service: EditarPerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarPerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
