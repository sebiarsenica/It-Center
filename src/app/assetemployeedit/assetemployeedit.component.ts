import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-assetemployeedit',
  templateUrl: './assetemployeedit.component.html',
  styleUrls: ['./assetemployeedit.component.css']
})
export class AssetemployeeditComponent implements OnInit {

  assetEmployee : assetemployee = {}
  employees : employee[] = []
 
  public costcenter : costcenter = {}
  
  constructor( private route:ActivatedRoute,
    private router: Router,
    private assetEmployeeService : AssetemployeeService,
    private employeeService : EmployeeService,
    private assetService : AssetService,
    private costcenterService : CostcenterService) { }

  emplid : number = 0;
  assetid : number = 0;
  employeeIndex : number = -1; 

  ngOnInit(): void {
    this.getAssetEmployee();
    this.getEmployees();
    this.getCostCenter();
    }

    getCostCenter():void{ 
      this.costcenterService.getByEmpl(this.emplid).subscribe({
        next : (data) => {
          this.costcenter = data; 
          console.log(data);
        }, 
        error : (e) => console.error(e)
      });
      
    } 

    getEmployees():void{ 
      this.employeeService.getEmployees().subscribe({
        next:(data) => {
          this.employees = data; 
          console.log(data);
        }, 
        error : (e) => console.error(e)
      });
    }   
    
  

  getAssetEmployee():void{ 
    this.emplid = this.route.snapshot.params["emplid"];
    this.assetid = this.route.snapshot.params["assetid"];
    this.assetEmployeeService.get(this.emplid,this.assetid).subscribe({ 
      next:(data) => { 
        this.assetEmployee = data; 
        console.log(data);
      }, 
      error :(e) => console.error(e)
    });
    
  }

  updateAsset(cost : costcenter):void{ 
    let asset  = this.assetEmployee.ids?.asset!;
    
    asset.costcenter = cost;
    
    this.assetService.updateAsset(asset).subscribe({
      next: (res) => {
        console.log(res);
      }, 
      error: (e) => console.error(e)
    });
  }

  deleteAssetEmployee():void{ 
    this.assetEmployeeService.deleteAssetEmployee(this.assetEmployee.ids?.employee?.id, this.assetEmployee.ids?.asset?.assetid).subscribe({ 
      next:(data)=>{ 
        this.router.navigate(['']);
        console.log(data);
      },
      error : (e) =>console.error(e)
    });  
  }

  updateAssetEmployee():void{ 
    
    let ids : ids 
    ids = this.assetEmployee.ids!;
    
    this.deleteAssetEmployee();
 
    ids.employee = this.employees[this.employeeIndex];
    this.assetEmployee.ids = ids;
    this.emplid = this.assetEmployee.ids.employee?.id;
    
    this.getCostCenter();
    this.assetEmployee.costcenter = this.costcenter;
    
    this.assetEmployeeService.addAssetEmployee(this.assetEmployee).subscribe({ 
    next:(data)=>{ 
      this.updateAsset(data.costcenter!);
      
      console.log(data);
      this.router.navigate(['/assetemployeedit/' + this.assetEmployee.ids?.employee?.id + '/' + this.assetEmployee.ids?.asset?.assetid]);
    },
    error : (e) =>console.error(e)
  });
  }

}
