import { TestBed, inject } from '@angular/core/testing';

import { CategoryDetailService } from './category-detail.service';

describe('CategoryDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryDetailService]
    });
  });

  it('should ...', inject([CategoryDetailService], (service: CategoryDetailService) => {
    expect(service).toBeTruthy();
  }));
});
