import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OHistoryComponent } from './o-history.component';

describe('OHistoryComponent', () => {
  let component: OHistoryComponent;
  let fixture: ComponentFixture<OHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
