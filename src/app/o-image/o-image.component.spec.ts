import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OImageComponent } from './o-image.component';

describe('OImageComponent', () => {
  let component: OImageComponent;
  let fixture: ComponentFixture<OImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
