import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { asset } from '../models/asset';
import { costcenter } from '../models/costcenter';
import { AssetService } from '../services/asset.service';
import { CostcenterService } from '../services/costcenter.service';

@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.css']
})
export class AssetDetailsComponent implements OnInit {

  @Input() viewMode = false; 
  @Input() currentAsset : asset = {}
  
  costcenterIndex = 0;
  message = '';

  public costcenters: costcenter[] = [];

  constructor(private assetService : AssetService,
    private costcenterService : CostcenterService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if(!this.viewMode){ 
      this.message = '';
      this.getAsset(this.route.snapshot.params["id"]);
      this.getCostCenters();
      
    }
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

  getAsset(id : number):void{ 
    this.assetService.get(id).subscribe({ 
      next: (data) => {
        this.currentAsset = data; 
        console.log(data); 
      },
      error:(e)=>console.error(e)
    });
  }
  
  updateAsset(): void{ 
    this.message = ''; 
    this.currentAsset.costcenter = this.costcenters[this.costcenterIndex];
    this.assetService.updateAsset(this.currentAsset).subscribe({
      next: (res)=>{
        this.message = "Asset updated successfully"; 
        console.log(this.message);
        this.getCostCenters();
      },
      error: (e) => console.error(e)
    });
  }

  deleteAsset(): void{ 
    this.assetService.deleteAsset(this.currentAsset.assetid as number).subscribe({ 
      next:(res)=>{ 
        this.message = "Asset deleted successfully";
        console.log(this.message);
        this.router.navigate(['asset']);
      },
      error: (e) => console.error(e)
    });
  }
}
