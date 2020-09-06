import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScanComponent} from './components/scan/scan.component';

const routes: Routes = [
  { path: '', component: ScanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
