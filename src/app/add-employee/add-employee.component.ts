import { Component, OnInit } from '@angular/core';
import { employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent  {

  employee: employee = {}
  submitted = false;

  constructor(private employeeService : EmployeeService) { }

  saveEmployee():void{ 
    const data = { 
      name : this.employee.name, 
      costcenter : this.employee.costcenter, 
      manager : this.employee.manager
    }
  
    this.employeeService.addEmployee(data).subscribe({ 
      next: (res) => {
        console.log(res); 
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newEmployee():void{ 
    this.submitted = false; 
    this.employee = { 
      name: '', 
      costcenter: '', 
      manager: '',
    };
  }

}
