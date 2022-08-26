import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwWoComponent } from './ow-wo.component';

describe('OwWoComponent', () => {
  let component: OwWoComponent;
  let fixture: ComponentFixture<OwWoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwWoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwWoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
