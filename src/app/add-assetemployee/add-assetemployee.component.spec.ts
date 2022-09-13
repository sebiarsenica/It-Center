import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssetemployeeComponent } from './add-assetemployee.component';

describe('AddAssetemployeeComponent', () => {
  let component: AddAssetemployeeComponent;
  let fixture: ComponentFixture<AddAssetemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAssetemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAssetemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
