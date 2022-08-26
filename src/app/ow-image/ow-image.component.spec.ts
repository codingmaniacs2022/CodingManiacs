import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwImageComponent } from './ow-image.component';

describe('OwImageComponent', () => {
  let component: OwImageComponent;
  let fixture: ComponentFixture<OwImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
