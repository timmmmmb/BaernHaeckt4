import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScanComponent } from './components/scan/scan.component';
import { CameraComponent } from './components/camera/camera.component';
import { ClientInfoComponent } from './components/client-info/client-info.component';
import {ZXingScannerComponent, ZXingScannerModule} from '@zxing/ngx-scanner';
import {PurchasesService} from './services/purchases.service';
import {ProductsService} from './services/products.service';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ScanComponent,
    CameraComponent,
    ClientInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZXingScannerModule,
    HttpClientModule
  ],
  providers: [UserService, ProductsService, PurchasesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
