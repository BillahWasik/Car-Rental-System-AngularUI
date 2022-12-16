import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Driver } from 'src/app/Models/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  baseUrl : string ='http://localhost:43768/api/driver';

  Alldriver : Driver[] = [];

  DriverData : Driver = new Driver() ;

  constructor(public http : HttpClient) { }

  getDrivers():Observable<Driver[]>{
   return this.http.get<Driver[]>(this.baseUrl);
  }
}
