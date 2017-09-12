/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DemoServicesService } from './demo-services.service';

describe('DemoServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemoServicesService]
    });
  });

  it('should ...', inject([DemoServicesService], (service: DemoServicesService) => {
    expect(service).toBeTruthy();
  }));
});
