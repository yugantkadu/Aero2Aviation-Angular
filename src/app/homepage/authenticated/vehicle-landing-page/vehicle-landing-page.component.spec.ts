import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleLandingPageComponent } from './vehicle-landing-page.component';

describe('VehicleLandingPageComponent', () => {
  let component: VehicleLandingPageComponent;
  let fixture: ComponentFixture<VehicleLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
