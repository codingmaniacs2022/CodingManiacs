import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwDietComponent } from './ow-diet.component';

describe('OwDietComponent', () => {
  let component: OwDietComponent;
  let fixture: ComponentFixture<OwDietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwDietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
