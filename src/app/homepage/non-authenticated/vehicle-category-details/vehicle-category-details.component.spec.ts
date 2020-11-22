import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCategoryDetailsComponent } from './vehicle-category-details.component';

describe('VehicleCategoryDetailsComponent', () => {
  let component: VehicleCategoryDetailsComponent;
  let fixture: ComponentFixture<VehicleCategoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleCategoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleCategoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
