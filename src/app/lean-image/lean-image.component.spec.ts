import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanImageComponent } from './lean-image.component';

describe('LeanImageComponent', () => {
  let component: LeanImageComponent;
  let fixture: ComponentFixture<LeanImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeanImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeanImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
