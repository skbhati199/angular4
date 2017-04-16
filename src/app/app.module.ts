import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { VerticalBarChartComponent } from './ngx.charts/vertical-bar-chart/vertical-bar-chart.component';
import { PieChartComponent } from './ngx.charts/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    CharacterListComponent,
    VerticalBarChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  RouterModule.forRoot([
    {
      path:'movies-list',
      component:MoviesListComponent
    },
    {
      path:'character-list',
      component:CharacterListComponent
    },
    {
      path:"vertical-bar",
      component:VerticalBarChartComponent
    },
    {
      path:'pie-chart',
      component:PieChartComponent
    }
  ]),
  BrowserModule, BrowserAnimationsModule, NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
