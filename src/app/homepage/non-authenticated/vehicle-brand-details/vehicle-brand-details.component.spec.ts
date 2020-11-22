import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleBrandDetailsComponent } from './vehicle-brand-details.component';

describe('VehicleBrandDetailsComponent', () => {
  let component: VehicleBrandDetailsComponent;
  let fixture: ComponentFixture<VehicleBrandDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleBrandDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleBrandDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
