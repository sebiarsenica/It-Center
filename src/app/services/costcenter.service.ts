import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { costcenter } from '../models/costcenter';

@Injectable({
  providedIn: 'root'
})
export class CostcenterService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getCostCenters():Observable<costcenter[]>{ 
    return this.http.get<costcenter[]>(this.apiServerUrl+'costcenter/all');
  }

  public get(id:number):Observable<costcenter>{ 
    return this.http.get<costcenter>(this.apiServerUrl+'costcenter/find/'+id);
  }

  public getByEmpl(id:number):Observable<costcenter>{ 
    return this.http.get<costcenter>(this.apiServerUrl+'costcenter/findempl/'+id);
  }

  public getOrderByCostCenterName():Observable<costcenter[]>{
    return this.http.get<costcenter[]>(this.apiServerUrl+"costcenter/sortByCostCenterName");
  }

  public getOrderByEmployeeName():Observable<costcenter[]>{
    return this.http.get<costcenter[]>(this.apiServerUrl+'costcenter/sortByEmployeeName');
  }

  public SearchByCostCenterName(name : string):Observable<costcenter[]>{ 
    return this.http.get<costcenter[]>(this.apiServerUrl+'costcenter/findByCostCenterName/'+name);
  }

  public SearchByEmployeeName(name : string):Observable<costcenter[]>{ 
    return this.http.get<costcenter[]>(this.apiServerUrl+'costcenter/findByEmpName/'+name);
  }

  public addCostCenter(cstc: costcenter):Observable<costcenter>{ 
    return this.http.post<costcenter>(this.apiServerUrl+'costcenter/add',cstc);
  }

  public updateCostCenter(cstc: costcenter):Observable<costcenter>{ 
    return this.http.put<costcenter>(this.apiServerUrl+'costcenter/update',cstc);
  }

  public deleteCostCenter(id: number): Observable<void>{
    return this.http.delete<void>(this.apiServerUrl+'costcenter/delete/'+id);
  }

  
}
