import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanSidenavComponent } from './lean-sidenav.component';

describe('LeanSidenavComponent', () => {
  let component: LeanSidenavComponent;
  let fixture: ComponentFixture<LeanSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeanSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeanSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
