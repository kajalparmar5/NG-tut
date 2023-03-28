import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {path:"user_home",component:UserHomeComponent,
  canActivate:[LoginGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
