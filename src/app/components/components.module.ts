import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NavbarComponent } from './navbar/navbar.component';
import { GrificoBarraHorizontalComponent } from './grifico-barra-horizontal/grifico-barra-horizontal.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavbarComponent,
    GrificoBarraHorizontalComponent
  ],
  exports: [
    NavbarComponent,
    GrificoBarraHorizontalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule

  ]
})
export class ComponentsModule { }
