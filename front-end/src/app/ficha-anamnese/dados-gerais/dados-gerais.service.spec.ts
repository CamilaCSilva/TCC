import { TestBed } from '@angular/core/testing';

import { DadosGeraisService } from './dados-gerais.service';

describe('DadosGeraisService', () => {
  let service: DadosGeraisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosGeraisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
