import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPopUpComponent } from './event-pop-up.component';

describe('EventPopUpComponent', () => {
  let component: EventPopUpComponent;
  let fixture: ComponentFixture<EventPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
