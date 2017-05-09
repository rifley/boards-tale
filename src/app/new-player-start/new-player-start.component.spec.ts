import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlayerStartComponent } from './new-player-start.component';

describe('NewPlayerStartComponent', () => {
  let component: NewPlayerStartComponent;
  let fixture: ComponentFixture<NewPlayerStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPlayerStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlayerStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
