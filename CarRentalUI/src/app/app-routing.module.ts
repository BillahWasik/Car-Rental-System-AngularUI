import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './Api/add-car/add-car.component';
import { CarComponent } from './Api/car/car.component';
import { GetDriversComponent } from './Api/Driver/get-drivers/get-drivers.component';
import { UpdatecarComponent } from './Api/updatecar/updatecar.component';

const routes: Routes = [
  {path:'car',component:CarComponent},
  {path:'car/addcar',component:AddCarComponent},
  {path:'car/updatecar',component:UpdatecarComponent},
  {path:'driver',component:GetDriversComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
