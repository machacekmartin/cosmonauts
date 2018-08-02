import { TestBed, inject } from '@angular/core/testing';
import { CosmonautsService } from './cosmonauts.service';

describe('CosmonautsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CosmonautsService]
    });
  });

  it('should be created', inject([CosmonautsService], (service: CosmonautsService) => {
    expect(service).toBeTruthy();
  }));
});
