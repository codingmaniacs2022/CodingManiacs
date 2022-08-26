import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanWoComponent } from './lean-wo.component';

describe('LeanWoComponent', () => {
  let component: LeanWoComponent;
  let fixture: ComponentFixture<LeanWoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeanWoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeanWoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
