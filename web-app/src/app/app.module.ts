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
import { LoginComponent } from './components/login/login.component';
import {UserService} from "./services/user.service";
import {RegionsService} from "./services/regions.service";
import {OffersService} from "./services/offers.service";
import {ProductsService} from "./services/products.service";
import {PurchasesService} from "./services/purchases.service";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {appReducer} from "./store/app.reducer";

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
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ root: appReducer}),
  ],
  providers: [UserService, RegionsService, OffersService, ProductsService, PurchasesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
