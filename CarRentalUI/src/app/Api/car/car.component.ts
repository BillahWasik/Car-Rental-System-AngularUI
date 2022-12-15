import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/Models/car';
import { CarService } from '../Car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {


  constructor(public carService : CarService){}

  ngOnInit(): void {
    this.carService.getCars().subscribe(data =>{
      this.carService.AllCar = data;
    })
  }

  populateCar(selectCar: Car){
    this.carService.carData = selectCar;
  }
  DeleteCar(id:number){
    if(confirm('Are you really want to delete this?')){
      this.carService.deletecar(id).subscribe(data=>{
        this.carService.getCars().subscribe(data=>{
          this.carService.AllCar = data;
        })
      });
    }
    
  }
   
  
}
