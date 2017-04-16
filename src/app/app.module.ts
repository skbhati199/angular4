import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
<<<<<<< HEAD
=======
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
>>>>>>> dded8c6a4bcfd05ebc937b7564c9239bb4e86b81

import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
<<<<<<< HEAD
=======
import { VerticalBarChartComponent } from './ngx.charts/vertical-bar-chart/vertical-bar-chart.component';
import { PieChartComponent } from './ngx.charts/pie-chart/pie-chart.component';
>>>>>>> dded8c6a4bcfd05ebc937b7564c9239bb4e86b81

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
<<<<<<< HEAD
    CharacterListComponent
=======
    CharacterListComponent,
    VerticalBarChartComponent,
    PieChartComponent
>>>>>>> dded8c6a4bcfd05ebc937b7564c9239bb4e86b81
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
<<<<<<< HEAD
    }
  ])
=======
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
>>>>>>> dded8c6a4bcfd05ebc937b7564c9239bb4e86b81
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
