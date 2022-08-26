import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanHistoryComponent } from './lean-history.component';

describe('LeanHistoryComponent', () => {
  let component: LeanHistoryComponent;
  let fixture: ComponentFixture<LeanHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeanHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeanHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
