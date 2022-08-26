import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverweightpageComponent } from './overweightpage.component';

describe('OverweightpageComponent', () => {
  let component: OverweightpageComponent;
  let fixture: ComponentFixture<OverweightpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverweightpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverweightpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
