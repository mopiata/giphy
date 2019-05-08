import { TestBed } from '@angular/core/testing';

import { GiphyRequestService } from './giphy-request.service';

describe('GiphyRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiphyRequestService = TestBed.get(GiphyRequestService);
    expect(service).toBeTruthy();
  });
});
