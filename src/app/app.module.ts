import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CostcentersComponent } from './costcenters/costcenters.component';
import { CostcentersDetailsComponent } from './costcenters-details/costcenters-details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddCostcenterComponent } from './add-costcenter/add-costcenter.component';
import { AssetComponent } from './asset/asset.component';
import { AssetDetailsComponent } from './asset-details/asset-details.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { AssetEmployeeComponent } from './asset-employee/asset-employee.component';
import { AddAssetemployeeComponent } from './add-assetemployee/add-assetemployee.component';
import { AssetemployeeditComponent } from './assetemployeedit/assetemployeedit.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    CostcentersComponent,
    CostcentersDetailsComponent,
    AddEmployeeComponent,
    AddCostcenterComponent,
    AssetComponent,
    AssetDetailsComponent,
    AddAssetComponent,
    AssetEmployeeComponent,
    AddAssetemployeeComponent,
    AssetemployeeditComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
