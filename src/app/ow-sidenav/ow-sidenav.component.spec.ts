import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwSidenavComponent } from './ow-sidenav.component';

describe('OwSidenavComponent', () => {
  let component: OwSidenavComponent;
  let fixture: ComponentFixture<OwSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
