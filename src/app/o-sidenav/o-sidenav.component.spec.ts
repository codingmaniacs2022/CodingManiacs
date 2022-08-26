import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OSidenavComponent } from './o-sidenav.component';

describe('OSidenavComponent', () => {
  let component: OSidenavComponent;
  let fixture: ComponentFixture<OSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
