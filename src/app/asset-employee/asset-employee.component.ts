import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { assetemployee } from '../models/assetEmployee';
import { AssetemployeeService } from '../services/assetemployee.service';


@Component({
  selector: 'app-asset-employee',
  templateUrl: './asset-employee.component.html',
  styleUrls: ['./asset-employee.component.css']
})
export class AssetEmployeeComponent implements OnInit {

  public assetEmployees : assetemployee[] = []
  public currentAssetEmployee : assetemployee = {}
  public currentIndex = -1
  public message = '';
  public name = '';

  constructor(private assetemployeeService : AssetemployeeService,
    private router: Router
    ) { }
  

  ngOnInit(): void {
    this.getAssetEmployees();
  }

  getAssetEmployees():void{ 
    this.assetemployeeService.getAssetEmployees().subscribe({
      next: (data) => { 
        this.assetEmployees = data; 
        console.log(data);
      },
      error: (e) => console.log(e)
    });
  }
  
  searchByEmployee():void{
    this.assetemployeeService.getByEmployeeName(this.name).subscribe({
      next:(data) => {
        this.assetEmployees = data; 
        console.log(data);
      },
      error: (e) => console.log(e)
    });
  }

  orderByAssetName():void{ 
    this.assetemployeeService.getOrderByAssetName().subscribe({ 
      next: (data) => {
        this.assetEmployees = data; 
        console.log(data);
      },
      error : (e) => console.log(e)
    });
  }

  orderByEmployeeName():void{ 
    this.assetemployeeService.getOrderByEmployeeName().subscribe({ 
      next: (data) => {
        this.assetEmployees = data; 
        console.log(data);
      },
      error : (e) => console.log(e)
    });
  }



  setActiveAssetEmployee(asset : assetemployee, index : number):void{ 
    this.currentAssetEmployee = asset; 
    this.currentIndex = index; 
    console.log(this.currentAssetEmployee);
   this.router.navigate(['/assetemployeedit/' + this.currentAssetEmployee.ids?.employee?.id + '/' + this.currentAssetEmployee.ids?.asset?.assetid]);
  }

  deleteAssetEmployee():void{ 
   if(!this.currentAssetEmployee.ids) {
    this.message = 'You need to have an item selected first!'; 
    return;
  }
   let emplid = this.currentAssetEmployee?.ids?.employee?.id; 
    let assetid = this.currentAssetEmployee.ids?.asset?.assetid;
    this.assetemployeeService.deleteAssetEmployee(emplid,assetid).subscribe({ 
      next:(data) => { 
        this.getAssetEmployees();
      },
      error : (e) => console.error(e)
    });
  }

}
