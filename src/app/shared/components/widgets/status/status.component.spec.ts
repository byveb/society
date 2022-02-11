import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusWidgetComponent } from './status.component';

describe('StatusComponent', () => {
  let component: StatusWidgetComponent;
  let fixture: ComponentFixture<StatusWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
