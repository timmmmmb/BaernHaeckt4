import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegionsComponent} from './components/regions/regions.component';
import {HomeComponent} from './components/home/home.component';
import {OffersComponent} from './components/offers/offers.component';
import {UserComponent} from './components/user/user.component';
import {RegionOfferComponent} from './components/region-offer/region-offer.component';


const routes: Routes = [
  { path: 'regions-detail', component: RegionOfferComponent},
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
