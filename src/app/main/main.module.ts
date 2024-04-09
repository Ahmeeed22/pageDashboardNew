import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './main-routing.module';
import { MainComponent } from './components/main/main.component'; 
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module'; 
import { HeaderComponent } from './components/header/header.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { HorizontalBarChartComponent } from './components/horizontal-bar-chart/horizontal-bar-chart.component';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    PieChartComponent,
    LineChartComponent,
    HorizontalBarChartComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule , 
    CoreModule,

  ]
})
export class AuthModule { }
