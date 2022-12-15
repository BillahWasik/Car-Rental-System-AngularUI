import { NgFor } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Car } from 'src/app/Models/car';
import { CarService } from '../Car.service';

@Component({
  selector: 'app-updatecar',
  templateUrl: './updatecar.component.html',
  styleUrls: ['./updatecar.component.css']
})
export class UpdatecarComponent implements OnInit {

  constructor(public updateService : CarService){
  }

  ngOnInit(): void {
  }

submit(myform:NgForm){
    this.updateCar(myform);
}

updateCar(form:NgForm){
  this.updateService.updatecar().subscribe(data=>{
    this.resetForm(form);
  })
}

resetForm(resetForm:NgForm){
    resetForm.form.reset();
    this.updateService.carData = new Car();
}


}
