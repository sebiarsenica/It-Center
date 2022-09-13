import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCostcenterComponent } from './add-costcenter.component';

describe('AddCostcenterComponent', () => {
  let component: AddCostcenterComponent;
  let fixture: ComponentFixture<AddCostcenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCostcenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCostcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
