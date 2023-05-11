import { TestBed } from '@angular/core/testing';

import { FichaAnamneseService } from './ficha-anamnese.service';

describe('FichaAnamneseService', () => {
  let service: FichaAnamneseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FichaAnamneseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
