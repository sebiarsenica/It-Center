import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
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


const routes: Routes = [
  {path: '', redirectTo: 'assetemployee', pathMatch: 'full'},
  {path: 'employee', component: EmployeeComponent},
  {path: 'employeeadd', component: AddEmployeeComponent},
  {path: 'employee/:id', component: EmployeeDetailsComponent},
  {path: 'costcenter', component: CostcentersComponent},
  {path: 'costcenter/:cstcnr', component: CostcentersDetailsComponent},
  {path: 'costcenteradd', component:AddCostcenterComponent},
  {path: 'asset', component:AssetComponent},
  {path: 'asset/:id', component:AssetDetailsComponent},
  {path: 'assetadd', component:AddAssetComponent},
  {path: 'assetemployee', component: AssetEmployeeComponent},
  {path: 'assetemployeeadd', component: AddAssetemployeeComponent}, 
  {path: 'assetemployeedit/:emplid/:assetid', component: AssetemployeeditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
