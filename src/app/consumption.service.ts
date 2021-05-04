import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConsumptionService {
 
  constructor(private http: HttpClient) { 
    
  }
  url:string="https://localhost:44390/api/Consumption/";

  totalConSumption(): Observable<number> {
    return this.http.get<number>(this.url+"TotalConSumption");
  }
  avgConSumption(): Observable<number> {
    return this.http.get<number>(this.url+"AvgConSumption");
  }
  maxConSumption(): Observable<number> {
    return this.http.get<number>(this.url+"MaxConSumption");
  }

  minConSumption(): Observable<number> {
    return this.http.get<number>(this.url+"MinConSumption");
  }
  
  maxVoltage(): Observable<number> {
    return this.http.get<number>(this.url+"MaxVoltage");
  }
  avgVoltage(): Observable<number> {
    return this.http.get<number>(this.url+"AvgVoltage");
  }
  maxCurrent(): Observable<number> {
    return this.http.get<number>(this.url+"MaxCurrent");
  }
  avgCurrent(): Observable<number> {
    return this.http.get<number>(this.url+"AvgCurrent");
  }
  
}
