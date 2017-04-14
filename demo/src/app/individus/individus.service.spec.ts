import { TestBed, inject } from '@angular/core/testing';

import { IndividusService } from './individus.service';

describe('IndividusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndividusService]
    });
  });

  it('should ...', inject([IndividusService], (service: IndividusService) => {
    expect(service).toBeTruthy();
  }));
});
