import { TestBed } from '@angular/core/testing';

import { MessagemService } from './messagem.service';

describe('MessagemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagemService = TestBed.get(MessagemService);
    expect(service).toBeTruthy();
  });
});
