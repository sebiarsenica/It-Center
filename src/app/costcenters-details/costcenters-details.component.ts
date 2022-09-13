import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { costcenter } from '../models/costcenter';
import { employee } from '../models/employee';
import { CostcenterService } from '../services/costcenter.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-costcenters-details',
  templateUrl: './costcenters-details.component.html',
  styleUrls: ['./costcenters-details.component.css']
})
export class CostcentersDetailsComponent implements OnInit {

  @Input() viewMode = false; 
  @Input() currentCostCenter :costcenter = {}

  message = '';
  public employees : employee[] = [];

  constructor(private costCenterService: CostcenterService,
    private empService : EmployeeService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    if(!this.viewMode){ 
      this.message = ''; 
      this.getCostCenter(this.route.snapshot.params["cstcnr"]);
      this.getEmployees();
    }
  } 

  public getEmployees():void{
    this.empService.getEmployeesNoCostCenter()
    .subscribe({
      next: (data) => {
        this.employees = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
    }

  getCostCenter(id: number):void{
    this.costCenterService.get(id).subscribe({
      next: (data) => {
        this.currentCostCenter = data; 
        console.log(data);
      },
      error: (e) =>console.error(e)
    });
  }

  updateCostCenter(): void{ 
    this.message = ''; 
    this.costCenterService.updateCostCenter(this.currentCostCenter).subscribe({
      next: (res)=>{
        this.message = "Cost center updated successfully"; 
        console.log(this.message);
        this.getEmployees();
      },
      error: (e) => console.error(e)
    });
  }

  deleteCostCenter(): void{ 
    this.costCenterService.deleteCostCenter(this.currentCostCenter.cstcnr as number).subscribe({ 
      next:(res)=>{ 
        this.message = "Cost center deleted successfully";
        console.log(this.message);
        this.router.navigate(['costcenter']);
      },
      error: (e) => console.error(e)
    });
  }

}
