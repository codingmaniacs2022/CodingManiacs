import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ODietComponent } from './o-diet.component';

describe('ODietComponent', () => {
  let component: ODietComponent;
  let fixture: ComponentFixture<ODietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ODietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ODietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
