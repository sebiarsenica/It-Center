import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { assetemployee } from '../models/assetEmployee';

@Injectable({
  providedIn: 'root'
})
export class AssetemployeeService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { } 

  public getAssetEmployees():Observable<assetemployee[]>{ 
    return this.http.get<assetemployee[]>(this.apiServerUrl+'assetEmployee/all');
  }

  public get(emplid:number, assetid:number):Observable<assetemployee>{
    return this.http.get<assetemployee>(this.apiServerUrl+'assetEmployee/find/'+emplid+'/'+assetid);

  }

  public getOrderByAssetName():Observable<assetemployee[]>{ 
    return this.http.get<assetemployee[]>(this.apiServerUrl+'assetEmployee/orderByAssetName');
  }

  public getOrderByEmployeeName():Observable<assetemployee[]>{ 
    return this.http.get<assetemployee[]>(this.apiServerUrl+'assetEmployee/orderByEmployeeName');
  }
  
  public getByEmployeeName(name : string):Observable<assetemployee[]>{ 
    return this.http.get<assetemployee[]>(this.apiServerUrl+'assetEmployee/employeeName/'+name);
  }
  
  public addAssetEmployee(asset : assetemployee):Observable<assetemployee>{
    return this.http.post<assetemployee>(this.apiServerUrl+'assetEmployee/add',asset);
  }

  public updateAssetEmployee(asset : assetemployee):Observable<assetemployee>{
    return this.http.put<assetemployee>(this.apiServerUrl+'assetEmployee/update',asset);
  }

  public deleteAssetEmployee(emplid: number, assetid : number):Observable<void>{
    return this.http.delete<void>(this.apiServerUrl+'assetEmployee/delete/'+emplid+'/'+assetid);
  }
}


