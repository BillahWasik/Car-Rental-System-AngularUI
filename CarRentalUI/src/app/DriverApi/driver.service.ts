import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Driver } from '../Models/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private myhttp : HttpClient) { }

  baseUrl : string = 'http://localhost:43768/api/driver';

  AllDriver : Driver[] = [];

  getAllDriver() : Observable<Driver[]>{
    return this.myhttp.get<Driver[]>(this.baseUrl);
  }
}
