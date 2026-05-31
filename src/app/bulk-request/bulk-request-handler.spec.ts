import { TestBed } from '@angular/core/testing';

import { BulkRequestHandler } from './bulk-request-handler';

describe('BulkRequestHandler', () => {
  let service: BulkRequestHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BulkRequestHandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
