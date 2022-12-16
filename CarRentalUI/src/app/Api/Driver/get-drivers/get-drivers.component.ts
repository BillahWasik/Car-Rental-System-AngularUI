import { Component, OnInit } from '@angular/core';
import { DriverService } from './driver.service';

@Component({
  selector: 'app-get-drivers',
  templateUrl: './get-drivers.component.html',
  styleUrls: ['./get-drivers.component.css']
})
export class GetDriversComponent implements OnInit {
  constructor(public service : DriverService){}

  ngOnInit(): void {
    this.service.getDrivers().subscribe(data=>{
      this.service.Alldriver = data;
    })
  }

}
