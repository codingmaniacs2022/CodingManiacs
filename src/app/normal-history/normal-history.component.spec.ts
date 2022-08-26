import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalHistoryComponent } from './normal-history.component';

describe('NormalHistoryComponent', () => {
  let component: NormalHistoryComponent;
  let fixture: ComponentFixture<NormalHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
