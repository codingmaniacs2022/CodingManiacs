import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanHeaderComponent } from './lean-header.component';

describe('LeanHeaderComponent', () => {
  let component: LeanHeaderComponent;
  let fixture: ComponentFixture<LeanHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeanHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeanHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
