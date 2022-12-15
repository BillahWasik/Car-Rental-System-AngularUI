import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './Api/add-car/add-car.component';
import { CarComponent } from './Api/car/car.component';
import { UpdatecarComponent } from './Api/updatecar/updatecar.component';

const routes: Routes = [
  {path:'car',component:CarComponent},
  {path:'car/addcar',component:AddCarComponent},
  {path:'car/updatecar',component:UpdatecarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
