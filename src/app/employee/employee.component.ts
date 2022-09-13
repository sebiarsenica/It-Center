import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  public employees : employee[] = [];
  public currentEmployee: employee = {}; 
  public currentIndex = -1;
  public name = '';

  constructor(private employeeService: EmployeeService){}

  ngOnInit(): void {
    this.getEmployees();
  }
    
  public getEmployees():void{
    this.employeeService.getEmployees()
    .subscribe({
      next: (data) => {
        this.employees = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
    }

    public OrderByNameAsc():void{ 
      this.employeeService.getOrderByNameAsc().subscribe({
        next: (data) => { 
          this.employees = data; 
          console.log(data);
          
        },
        error : (e) =>console.error(e)
      });
    }

    public OrderByNameDesc():void{ 
      this.employeeService.getOrderByNameDesc().subscribe({
        next: (data) => { 
          this.employees = data; 
          console.log(data);
          
        },
        error : (e) =>console.error(e)
      });
    }

    public setActiveEmployee(emp: employee, index: number): void{ 
      this.currentEmployee = emp; 
      this.currentIndex = index;
    }

    searchByName():void{ 
      this.employeeService.findByName(this.name).subscribe({
        next:(data) => { 
          this.employees = data; 
          console.log(data);
         
        },
        error:(e) =>console.error(e)
      });
    }
  
  }
