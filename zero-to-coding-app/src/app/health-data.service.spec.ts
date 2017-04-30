import { TestBed, inject } from '@angular/core/testing';

import { HealthDataService } from './health-data.service';

describe('HealthDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HealthDataService]
    });
  });

  it('should ...', inject([HealthDataService], (service: HealthDataService) => {
    expect(service).toBeTruthy();
  }));
});
