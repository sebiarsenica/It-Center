import { Component, OnInit } from '@angular/core';
import { asset } from '../models/asset';
import { assetemployee } from '../models/assetEmployee';
import { costcenter } from '../models/costcenter';
import { employee } from '../models/employee';
import { ids } from '../models/ids';
import { AssetService } from '../services/asset.service';
import { AssetemployeeService } from '../services/assetemployee.service';
import { CostcenterService } from '../services/costcenter.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-assetemployee',
  templateUrl: './add-assetemployee.component.html',
  styleUrls: ['./add-assetemployee.component.css']
})
export class AddAssetemployeeComponent implements OnInit {

  assetEmployee : assetemployee = {}
  assets : asset[] = []
  employees : employee[] = []
  costcenter : costcenter = {}
  submitted = false;
  Ids : ids = {}

  fromDate : any;
  toDate:any;
  assetIndex = -1;
  employeeIndex = -1;

  constructor(private assetEmployeeService : AssetemployeeService,
    private assetService : AssetService,
    private employeeService : EmployeeService,
    private costcenterService : CostcenterService) { }

  ngOnInit(): void {
    this.getAssets();
    this.getEmployees();
  }

  getAssets():void{ 
    this.assetService.getNotInAssetEmployee().subscribe({
      next: (data) => { 
        this.assets = data; 
        console.log(data);
      }, 
      error : (e) => console.error(e)
    });
  }
  
  getEmployees():void{ 
    this.employeeService.getWithCostCenter().subscribe({
      next:(data) => {
        this.employees = data; 
        console.log(data);
      }, 
      error : (e) => console.error(e)
    });
  } 

  getCostCenter():void{ 
    
    this.costcenterService.getByEmpl(this.Ids.employee?.id).subscribe({
      next : (data) => {
        this.costcenter = data; 
        console.log(data);
      }, 
      error : (e) => console.error(e)
    });
  } 

  updateAsset():void{ 
    let asset = this.assets[this.assetIndex];
    asset.costcenter = this.costcenter; 
    this.assetService.updateAsset(asset).subscribe({
      next: (res) => {
        console.log(res);
      }, 
      error: (e) => console.error(e)
    });
  }

  saveAssetEmployee():void{ 
    console.log();
    this.Ids.asset = this.assets[this.assetIndex];
    this.Ids.employee = this.employees[this.employeeIndex];
    
    this.getCostCenter();
    const data = {
      ids : this.Ids,
      fromm : this.assetEmployee.fromm,
      too : this.assetEmployee.too,
      costcenter : this.costcenter,
      endoflife : this.assetEmployee.endoflife
    }
    
    console.log(data);
    this.assetEmployeeService.addAssetEmployee(data).subscribe({
      next: (res) => {
        this.updateAsset();
        console.log(res); 
        this.submitted = true; 
      },
      error: (e) => console.error(e)
    })
  }
 
  newAssetEmployee():void{ 
    this.submitted = false; 
    this.assetEmployee = {}; 
    this.getAssets();
    this.getEmployees();
  }

}
