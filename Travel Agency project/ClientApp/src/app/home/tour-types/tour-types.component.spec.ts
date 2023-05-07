import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourTypesComponent } from './tour-types.component';

describe('TourTypesComponent', () => {
  let component: TourTypesComponent;
  let fixture: ComponentFixture<TourTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
