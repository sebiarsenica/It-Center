import { Component, OnInit } from '@angular/core';
import { costcenter } from '../models/costcenter';
import { CostcenterService } from '../services/costcenter.service';

@Component({
  selector: 'app-costcenters',
  templateUrl: './costcenters.component.html',
  styleUrls: ['./costcenters.component.css']
})
export class CostcentersComponent implements OnInit {

  public costCenters: costcenter[] = [];
  public currentCostCenter: costcenter = {}; 
  public currentIndex = -1; 
  public title = '';
  public name = '';

  constructor(private costcenterService : CostcenterService) { }

  ngOnInit(): void {
    this.getCostCenters();
  }

  public orderByCostCenterName():void{ 
    this.costcenterService.getOrderByCostCenterName().subscribe({ 
      next: (data) => {
        this.costCenters = data; 
        console.log(data);
      }, 
      error : (e) => console.error(e)
    });
  }

  public searchByCostCenterName():void{ 
   this.costcenterService.SearchByCostCenterName(this.name).subscribe({
    next: (data) => {
      this.costCenters = data; 
      console.log(data);
    },
    error :(e) => console.error(e)
   });
  }

  public searchByEmployeeName():void{ 
    this.costcenterService.SearchByEmployeeName(this.name).subscribe({
     next: (data) => {
       this.costCenters = data; 
       console.log(data);
     },
     error :(e) => console.error(e)
    });
   }

  public orderByEmployeeName():void{ 
    this.costcenterService.getOrderByEmployeeName().subscribe({ 
      next: (data) => {
        this.costCenters = data; 
        console.log(data);
      }, 
      error : (e) => console.error(e)
    });
  }

  public getCostCenters():void{ 
    this.costcenterService.getCostCenters().subscribe({
      next:(data)=>{
        this.costCenters = data; 
        console.log(data);
        },
      error: (e) =>console.error(e)
    });
  }

  public setActiveCostCenter(cstc: costcenter, index :number):void{ 
    this.currentCostCenter = cstc; 
    this.currentIndex = index;
    console.log(this.currentCostCenter);
  }



}
