import { TestBed } from '@angular/core/testing';

import { ProteckRedisServiceService } from './proteck-redis-service.service';

describe('ProteckRedisServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProteckRedisServiceService = TestBed.get(ProteckRedisServiceService);
    expect(service).toBeTruthy();
  });
});
