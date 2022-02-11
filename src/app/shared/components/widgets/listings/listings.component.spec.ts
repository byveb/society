import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsWidgetComponent } from './listings.component';

describe('ListingsComponent', () => {
  let component: ListingsWidgetComponent;
  let fixture: ComponentFixture<ListingsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingsWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
