import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirskoLyzhniTuryComponent } from './girsko-lyzhni-tury.component';

describe('GirskoLyzhniTuryComponent', () => {
  let component: GirskoLyzhniTuryComponent;
  let fixture: ComponentFixture<GirskoLyzhniTuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GirskoLyzhniTuryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GirskoLyzhniTuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
