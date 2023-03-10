import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnablementOsChatAiSidebarComponent } from './enablement-os-chat-ai-sidebar.component';

describe('EnablementOsChatAiSidebarComponent', () => {
  let component: EnablementOsChatAiSidebarComponent;
  let fixture: ComponentFixture<EnablementOsChatAiSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnablementOsChatAiSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnablementOsChatAiSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
