import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { asset } from '../models/asset';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAssets():Observable<asset[]>{ 
    return this.http.get<asset[]>(this.apiServerUrl+'asset/all');
  }

  public get(assetid:number):Observable<asset>{ 
    return this.http.get<asset>(this.apiServerUrl+'asset/find/'+assetid);
  }

  public getNotInAssetEmployee():Observable<asset[]>{ 
    return this.http.get<asset[]>(this.apiServerUrl+'asset/getnae');
  }

  public getOrderByNameAsc():Observable<asset[]>{ 
    return this.http.get<asset[]>(this.apiServerUrl+"asset/orderByNameAsc");
  }

  public getOrderByNameDesc():Observable<asset[]>{ 
    return this.http.get<asset[]>(this.apiServerUrl+"asset/orderByNameDesc");
  }

  public findByNameStartsWith(name : string):Observable<asset[]>{ 
    return this.http.get<asset[]>(this.apiServerUrl+'asset/findByName/'+name);
  }

  public addAsset(asset : asset):Observable<asset>{ 
    return this.http.post<asset>(this.apiServerUrl+'asset/add',asset);
  }

  public updateAsset(asset : asset):Observable<asset>{ 
    return this.http.put<asset>(this.apiServerUrl+'asset/update',asset);
  }

  public deleteAsset(id: number): Observable<void>{
    return this.http.delete<void>(this.apiServerUrl+'asset/delete/'+id);
  }

}
