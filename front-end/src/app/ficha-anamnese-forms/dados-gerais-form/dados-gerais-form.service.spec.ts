import { TestBed } from '@angular/core/testing';

import { DadosGeraisFormService } from './dados-gerais-form.service';

describe('DadosGeraisService', () => {
  let service: DadosGeraisFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosGeraisFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
