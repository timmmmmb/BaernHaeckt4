import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegionsComponent} from './components/regions/regions.component';
import {HomeComponent} from './components/home/home.component';
import {OffersComponent} from './components/offers/offers.component';
import {UserComponent} from './components/user/user.component';
import {RegionDetailComponent} from './components/region-detail/region-detail.component';


const routes: Routes = [
  { path: 'region/**', component: RegionDetailComponent},
  { path: 'regions', component: RegionsComponent},
  { path: 'offers', component: OffersComponent},
  { path: 'user', component: UserComponent},
  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
