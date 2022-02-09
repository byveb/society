import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingPageComponent } from './listings.component';

describe('ListingsComponent', () => {
  let component: ListingPageComponent;
  let fixture: ComponentFixture<ListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
