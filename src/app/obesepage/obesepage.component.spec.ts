import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObesepageComponent } from './obesepage.component';

describe('ObesepageComponent', () => {
  let component: ObesepageComponent;
  let fixture: ComponentFixture<ObesepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObesepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObesepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
