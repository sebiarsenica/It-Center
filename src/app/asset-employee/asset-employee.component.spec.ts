import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetEmployeeComponent } from './asset-employee.component';

describe('AssetEmployeeComponent', () => {
  let component: AssetEmployeeComponent;
  let fixture: ComponentFixture<AssetEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
