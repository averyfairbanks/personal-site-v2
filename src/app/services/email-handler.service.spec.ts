import { TestBed } from '@angular/core/testing';

import { EmailHandlerService } from './email-handler.service';

describe('EmailHandlerService', () => {
  let service: EmailHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
