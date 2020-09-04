import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { RegionsComponent } from './components/regions/regions.component';
import { RegionComponent } from './components/region/region.component';
import { OfferComponent } from './components/offer/offer.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegionDetailComponent } from './components/region-detail/region-detail.component';
import { RegionOfferComponent } from './components/region-offer/region-offer.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OffersComponent,
    RegionsComponent,
    RegionComponent,
    OfferComponent,
    HeaderComponent,
    FooterComponent,
    RegionDetailComponent,
    RegionOfferComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
