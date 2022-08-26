import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwHistoryComponent } from './ow-history.component';

describe('OwHistoryComponent', () => {
  let component: OwHistoryComponent;
  let fixture: ComponentFixture<OwHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
