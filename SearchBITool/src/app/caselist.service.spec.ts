import { TestBed, inject } from '@angular/core/testing';

import { CaselistService } from './caselist.service';

describe('CaselistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaselistService]
    });
  });

  it('should be created', inject([CaselistService], (service: CaselistService) => {
    expect(service).toBeTruthy();
  }));
});
