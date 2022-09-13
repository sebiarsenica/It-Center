import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input() viewMode = false; 
  @Input() currentEmployee : employee = {}

  message = '';
  

  constructor(private employeeService : EmployeeService, 
    private route : ActivatedRoute,
    private router: Router  ) { }

  ngOnInit(): void {
    if(!this.viewMode) {
      this.message = ''; 
      this.getEmployee(this.route.snapshot.params["id"]);
    }
  }

    getEmployee(id: number): void {
    this.employeeService.get(id)
      .subscribe({
        next: (data) => {
          this.currentEmployee = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

    updateEmployee(): void{ 
      this.message = ''; 
      
      this.employeeService.updateEmployee(this.currentEmployee).subscribe({
        next: (res) =>{
          this.message = 'Employee updated successfully'; 
          console.log(this.message);
        },
        error: (e) => console.error(e)
      });
    }

    deleteEmployee(): void{ 
      this.employeeService.deleteEmployee(this.currentEmployee.id).subscribe({
        next:(res) =>{ 
          this.message = "Employee deleted successfully"; 
          console.log(this.message);
          this.router.navigate(['employee']);
        },
        error: (e) => console.error(e)
      });
    }

}
