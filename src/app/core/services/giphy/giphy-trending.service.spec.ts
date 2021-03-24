import { TestBed } from '@angular/core/testing';

import { GiphyTrendingService } from './giphy-trending.service';

describe('GiphyTrendingService', () => {
  let service: GiphyTrendingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiphyTrendingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
