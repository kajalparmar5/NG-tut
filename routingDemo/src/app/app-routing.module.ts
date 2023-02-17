import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepComponent } from './dep/dep.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepdetailsComponent } from './depdetails/depdetails.component';
import { EmpComponent } from './emp/emp.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'dep', component:DepComponent},
  {path:'dep/:id',component:DepartmentDetailsComponent},
  {path:'emp' , component:EmpComponent},
  {path:"**" , component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,
                                DepComponent,
                                EmpComponent,
                                PageNotFoundComponent,
                                DepartmentDetailsComponent]
