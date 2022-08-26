import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwProfileComponent } from './ow-profile.component';

describe('OwProfileComponent', () => {
  let component: OwProfileComponent;
  let fixture: ComponentFixture<OwProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
