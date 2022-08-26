import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwHeaderComponent } from './ow-header.component';

describe('OwHeaderComponent', () => {
  let component: OwHeaderComponent;
  let fixture: ComponentFixture<OwHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
