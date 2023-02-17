import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DepdetailsComponent } from './depdetails/depdetails.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
// import { DepComponent } from './dep/dep.component';
// import { EmpComponent } from './emp/emp.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    HomeComponent,
    DepdetailsComponent,
    DepartmentDetailsComponent
    // DepComponent,
    // EmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
