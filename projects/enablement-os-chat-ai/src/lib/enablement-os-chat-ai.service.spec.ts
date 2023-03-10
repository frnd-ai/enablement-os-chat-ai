import { TestBed } from '@angular/core/testing';

import { EnablementOsChatAiService } from './enablement-os-chat-ai.service';

describe('EnablementOsChatAiService', () => {
  let service: EnablementOsChatAiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnablementOsChatAiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
