import { Component, OnInit } from '@angular/core';
import { costcenter } from '../models/costcenter';
import { employee } from '../models/employee';
import { CostcenterService } from '../services/costcenter.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-costcenter',
  templateUrl: './add-costcenter.component.html',
  styleUrls: ['./add-costcenter.component.css']
})
export class AddCostcenterComponent implements OnInit {

  costcenter: costcenter = {} 
  index = 0 
  employees : employee [] = []
  submitted = false;
  
  
  constructor(private costcenterService : CostcenterService, 
    private employeeService : EmployeeService) { }
   
    ngOnInit(): void {
      this.getEmployees();
    }

    public getEmployees():void{
      this.employeeService.getEmployeesNoCostCenter()
      .subscribe({
        next: (data) => {
          this.employees = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
      }

      saveCostCenter():void{ 
        const data = { 
          
          employee: this.employees[this.index], 
          cstcdeleteflag : false
        }
         console.log(data);
        this.costcenterService.addCostCenter(data).subscribe({ 
          next: (res) => { 
            console.log(res); 
            this.submitted = true;
          },
          error:(e) =>console.error(e)

        })
      }

      newCostCenter(): void { 
        this.submitted = false; 
        this.getEmployees();
        this.costcenter = {}
      }

}
