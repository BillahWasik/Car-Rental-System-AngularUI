import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../Models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl : string ='http://localhost:43768/api/car';

  AllCar : Car[] = [];

  carData : Car = new Car() ;

  constructor(public http : HttpClient) { }

  getCars():Observable<Car[]>{
   return this.http.get<Car[]>(this.baseUrl);
  }

  addcar(){
   return this.http.post(this.baseUrl,this.carData);
  }
  updatecar(){
    return this.http.put(`${this.baseUrl}/${this.carData.id}`,this.carData);
  }
  deletecar(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
