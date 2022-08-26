import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalDietComponent } from './normal-diet.component';

describe('NormalDietComponent', () => {
  let component: NormalDietComponent;
  let fixture: ComponentFixture<NormalDietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalDietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
