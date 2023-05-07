import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastroTuryComponent } from './gastro-tury.component';

describe('GastroTuryComponent', () => {
  let component: GastroTuryComponent;
  let fixture: ComponentFixture<GastroTuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastroTuryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastroTuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
