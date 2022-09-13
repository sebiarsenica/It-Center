import { Component, OnInit } from '@angular/core';
import { asset } from '../models/asset';
import { AssetService } from '../services/asset.service';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {

  public Assets : asset[] = []; 
  public currentAsset : asset = {};
  public currentIndex = -1; 
  public title = '';
  public name = '';

  constructor(private assetService : AssetService) { }

  ngOnInit(): void {
    this.getAssets();
  }
  
  public OrderByNameAsc():void{ 
    this.assetService.getOrderByNameAsc().subscribe({ 
      next: (data) => { 
        this.Assets = data; 
        console.log(data);
      },
      error : (e) => console.error(e)
    });
  }

  public SearchByName():void{ 
    this.assetService.findByNameStartsWith(this.name).subscribe({ 
      next:(data) => { 
        this.Assets = data; 
        console.log(data);
      },
      error : (e) => console.error(e)
    });
  }

  public OrderByNameDesc():void{ 
    this.assetService.getOrderByNameDesc().subscribe({
      next:(data) => {
        this.Assets = data; 
        console.log(data);
      },
      error : (e) => console.error(e)
    });
  }


  public getAssets():void{ 
    this.assetService.getAssets().subscribe({
      next:(data)=>{
        this.Assets = data; 
        console.log(data);
        },
      error: (e) =>console.error(e)
    });
  }

  public setActiveAsset(assett: asset, index :number):void{ 
    this.currentAsset = assett; 
    this.currentIndex = index;
    console.log(this.currentAsset);
  }
}
