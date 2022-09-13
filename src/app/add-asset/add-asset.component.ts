import { Component, OnInit } from '@angular/core';
import { asset } from '../models/asset';
import { costcenter } from '../models/costcenter';
import { AssetService } from '../services/asset.service';
import { CostcenterService } from '../services/costcenter.service';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})
export class AddAssetComponent implements OnInit {

  asset: asset = {} 
  costCenterIndex = 0 
  costcenters : costcenter[] = [] 
  submitted = false;
  date? : Date

  constructor(private assetService : AssetService, 
    private costcenterService : CostcenterService) { }

  ngOnInit(): void {
    this.getCostCenters();
    this.getCurrentDate();
  }

  getCurrentDate():void{ 
    let today:Date = new Date(); 
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    this.date = new Date(date);
    console.log(date);
  }

   getCostCenters():void{ 
    this.costcenterService.getCostCenters().subscribe({
      next:(data)=>{
        this.costcenters = data; 
        console.log(data);
      },
      error: (e) =>console.error(e)
    });
  }

  saveAsset():void{ 
    const data = {
      name:this.asset.name,
      description : this.asset.description,
      inputdate  : this.date,
      costcenter : this.costcenters[this.costCenterIndex]
    }

    this.assetService.addAsset(data).subscribe({
      next:(res)=>{ 
        console.log(res); 
        this.submitted = true;
      },
      error: (e) => console.error(e)
    })
  }

  newAsset():void{ 
    this.submitted = false; 
    this.getCostCenters();
    this.asset = {}
  }

}
