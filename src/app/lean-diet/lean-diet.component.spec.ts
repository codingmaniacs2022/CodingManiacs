import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanDietComponent } from './lean-diet.component';

describe('LeanDietComponent', () => {
  let component: LeanDietComponent;
  let fixture: ComponentFixture<LeanDietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeanDietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeanDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
