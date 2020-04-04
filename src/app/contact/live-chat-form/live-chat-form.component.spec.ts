import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveChatFormComponent } from './live-chat-form.component';

describe('LiveChatFormComponent', () => {
  let component: LiveChatFormComponent;
  let fixture: ComponentFixture<LiveChatFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveChatFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveChatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
