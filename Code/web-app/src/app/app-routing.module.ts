import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegionsComponent} from './components/regions/regions.component';
import {HomeComponent} from './components/home/home.component';
import {UserComponent} from './components/user/user.component';
import {RegionDetailComponent} from './components/region-detail/region-detail.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {QrDisplayComponent} from './components/qr-display/qr-display.component';
import {ProductsComponent} from './components/products/products.component';


const routes: Routes = [
  // First route is a wildcard route (you can pass everything after the /)
  { path: 'region/:region', component: RegionDetailComponent},
  { path: 'regions', component: RegionsComponent},
  { path: 'offers', component: ProductsComponent},
  { path: 'profile', component: UserComponent},
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'qr-display', component: QrDisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
