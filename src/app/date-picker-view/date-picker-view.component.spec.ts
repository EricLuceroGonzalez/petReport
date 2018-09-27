import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerViewComponent } from './date-picker-view.component';

describe('DatePickerViewComponent', () => {
  let component: DatePickerViewComponent;
  let fixture: ComponentFixture<DatePickerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
