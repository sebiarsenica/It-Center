import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<employee[]> {
    return this.http.get<employee[]>(this.apiServerUrl+'employee/all');
  }

  public getEmployeesNoCostCenter(): Observable<employee[]>{ 
    return this.http.get<employee[]>(this.apiServerUrl+'employee/nocost');
  }

  public get(id: number):Observable<employee>{ 
    return this.http.get<employee>(this.apiServerUrl+'employee/find/'+id);
  }

  public getOrderByNameAsc():Observable<employee[]> { 
    return this.http.get<employee[]>(this.apiServerUrl+"employee/orderByName");
  }

  public getOrderByNameDesc():Observable<employee[]>{
    return this.http.get<employee[]>(this.apiServerUrl+"employee/orderByNameDesc");
  }

  public getWithCostCenter():Observable<employee[]> { 
    return this.http.get<employee[]>(this.apiServerUrl+"employee/withCostCenter")
  }

  public findByName(name : string):Observable<employee[]>{ 
    return this.http.get<employee[]>(this.apiServerUrl+'employee/findc/'+ name);
  }

  public addEmployee(emp:employee): Observable<employee>{
    return this.http.post<employee>(this.apiServerUrl+'employee/add', emp);
  }

  public updateEmployee(emp:employee): Observable<employee>{
    return this.http.put<employee>(this.apiServerUrl+'employee/update', emp);
  }

  public deleteEmployee(employeeid: number): Observable<void>{
    return this.http.delete<void>(this.apiServerUrl+'employee/delete/'+employeeid);
  }
}
