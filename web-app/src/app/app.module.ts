import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { RegionsComponent } from './components/regions/regions.component';
import { OfferComponent } from './components/offer/offer.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegionDetailComponent } from './components/region-detail/region-detail.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import {UserService} from './services/user.service';
import {RegionsService} from './services/regions.service';
import {OffersService} from './services/offers.service';
import {ProductsService} from './services/products.service';
import {PurchasesService} from './services/purchases.service';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {appReducer} from './store/app.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { QrDisplayComponent } from './components/qr-display/qr-display.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OffersComponent,
    RegionsComponent,
    OfferComponent,
    HeaderComponent,
    FooterComponent,
    RegionDetailComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    LoginComponent,
    QrDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxQRCodeModule,
    StoreModule.forRoot({ root: appReducer}),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [UserService, RegionsService, OffersService, ProductsService, PurchasesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
