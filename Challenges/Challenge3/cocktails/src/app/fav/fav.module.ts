import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteCocktailsComponent } from './components/favourite-cocktails/favourite-cocktails.component';



@NgModule({
  declarations: [
    FavouriteCocktailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FavouriteCocktailsComponent
  ]
})
export class FavModule { }
