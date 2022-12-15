import { Component, OnInit } from '@angular/core';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-all-driver',
  templateUrl: './all-driver.component.html',
  styleUrls: ['./all-driver.component.css']
})
export class AllDriverComponent implements OnInit {

  constructor(public service : DriverService) {
  }

  ngOnInit(): void {
    this.service.getAllDriver().subscribe(data=>{
      this.service.AllDriver = data;
    })
  }

}
