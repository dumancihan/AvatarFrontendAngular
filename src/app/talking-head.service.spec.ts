import { TestBed } from '@angular/core/testing';

import { TalkingHeadService } from './talking-head.service';

describe('TalkingHeadService', () => {
  let service: TalkingHeadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalkingHeadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
