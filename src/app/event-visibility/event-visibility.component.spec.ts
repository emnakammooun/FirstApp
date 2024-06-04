import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventVisibilityComponent } from './event-visibility.component';

describe('EventVisibilityComponent', () => {
  let component: EventVisibilityComponent;
  let fixture: ComponentFixture<EventVisibilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventVisibilityComponent]
    });
    fixture = TestBed.createComponent(EventVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
