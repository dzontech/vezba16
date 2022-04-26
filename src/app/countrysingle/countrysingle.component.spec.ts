import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrysingleComponent } from './countrysingle.component';

describe('CountrysingleComponent', () => {
  let component: CountrysingleComponent;
  let fixture: ComponentFixture<CountrysingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrysingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrysingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
