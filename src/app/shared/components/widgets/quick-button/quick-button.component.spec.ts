import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickButtonWidgetComponent } from './quick-button.component';

describe('QuickButtonComponent', () => {
  let component: QuickButtonWidgetComponent;
  let fixture: ComponentFixture<QuickButtonWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuickButtonWidgetComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickButtonWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
