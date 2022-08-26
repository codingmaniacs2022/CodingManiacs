import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OWoComponent } from './o-wo.component';

describe('OWoComponent', () => {
  let component: OWoComponent;
  let fixture: ComponentFixture<OWoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OWoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OWoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
