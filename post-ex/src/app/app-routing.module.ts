import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserhomeComponent } from './userhome/userhome.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:"home",component:UserhomeComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
