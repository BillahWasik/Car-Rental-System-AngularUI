import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Car } from 'src/app/Models/car';
import { CarService } from '../Car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor(public AddService : CarService){
  }

  ngOnInit(): void {
  }

  submit(form : NgForm){
    this.InsertCar(form);
  }

  InsertCar(myform:NgForm){
    this.AddService.addcar().subscribe(data=>{
      this.resetForm(myform);
      this.AddService.getCars().subscribe(data=>{
        this.AddService.AllCar = data;
      })
    })
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.AddService.carData = new Car();
  }



}
