import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanProfileComponent } from './lean-profile.component';

describe('LeanProfileComponent', () => {
  let component: LeanProfileComponent;
  let fixture: ComponentFixture<LeanProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeanProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeanProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
