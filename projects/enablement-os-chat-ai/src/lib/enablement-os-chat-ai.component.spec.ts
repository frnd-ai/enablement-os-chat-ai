import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnablementOsChatAiComponent } from './enablement-os-chat-ai.component';

describe('EnablementOsChatAiComponent', () => {
  let component: EnablementOsChatAiComponent;
  let fixture: ComponentFixture<EnablementOsChatAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnablementOsChatAiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnablementOsChatAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
