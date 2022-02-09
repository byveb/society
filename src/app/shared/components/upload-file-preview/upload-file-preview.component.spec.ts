import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFilePreviewComponent } from './upload-file-preview.component';

describe('UploadFilePreviewComponent', () => {
  let component: UploadFilePreviewComponent;
  let fixture: ComponentFixture<UploadFilePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFilePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFilePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
