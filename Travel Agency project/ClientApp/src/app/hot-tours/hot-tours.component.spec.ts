import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotToursComponent } from './hot-tours.component';

describe('HotToursComponent', () => {
  let component: HotToursComponent;
  let fixture: ComponentFixture<HotToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotToursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
