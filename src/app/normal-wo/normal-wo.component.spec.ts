import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalWoComponent } from './normal-wo.component';

describe('NormalWoComponent', () => {
  let component: NormalWoComponent;
  let fixture: ComponentFixture<NormalWoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalWoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalWoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
