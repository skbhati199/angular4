import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { CharacterListComponent } from './components/character-list/character-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    CharacterListComponent
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
    }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
