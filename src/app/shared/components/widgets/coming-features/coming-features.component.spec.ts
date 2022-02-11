import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingFeaturesWidgetComponent } from './coming-features.component';

describe('ComingFeaturesComponent', () => {
  let component: ComingFeaturesWidgetComponent;
  let fixture: ComponentFixture<ComingFeaturesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComingFeaturesWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingFeaturesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
