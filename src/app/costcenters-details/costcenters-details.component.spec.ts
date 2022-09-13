import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostcentersDetailsComponent } from './costcenters-details.component';

describe('CostcentersDetailsComponent', () => {
  let component: CostcentersDetailsComponent;
  let fixture: ComponentFixture<CostcentersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostcentersDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostcentersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
