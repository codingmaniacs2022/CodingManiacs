import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalImageComponent } from './normal-image.component';

describe('NormalImageComponent', () => {
  let component: NormalImageComponent;
  let fixture: ComponentFixture<NormalImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
