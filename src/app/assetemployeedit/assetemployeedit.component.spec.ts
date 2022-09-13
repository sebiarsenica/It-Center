import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetemployeeditComponent } from './assetemployeedit.component';

describe('AssetemployeeditComponent', () => {
  let component: AssetemployeeditComponent;
  let fixture: ComponentFixture<AssetemployeeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetemployeeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetemployeeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
