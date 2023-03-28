import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { HomeDataComponent } from './home-data/home-data.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerGuard } from './seller.guard';

const routes: Routes = [
  {path:"",component:HomeDataComponent},
  {path:"sellerAuth",component:SellerAuthComponent},
  {path:"seller-home",
  component:SellerHomeComponent,canActivate:[SellerGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
