import { TestBed } from '@angular/core/testing';

import { ValidatorsEmailService } from './validators-email.service';

describe('ValidatorsEmailService', () => {
  let service: ValidatorsEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorsEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
