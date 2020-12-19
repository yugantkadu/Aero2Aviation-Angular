import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleReceiptComponent } from './vehicle-receipt.component';

describe('VehicleReceiptComponent', () => {
  let component: VehicleReceiptComponent;
  let fixture: ComponentFixture<VehicleReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
