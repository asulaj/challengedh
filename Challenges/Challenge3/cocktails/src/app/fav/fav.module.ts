import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteCocktailsComponent } from './components/favourite-cocktails/favourite-cocktails.component';
import {AppRoutingModule} from '../../app/app-routing.module';
import { ModalIngredientsComponent } from './components/modal-ingredients/modal-ingredients.component'


@NgModule({
  declarations: [
    FavouriteCocktailsComponent,
    ModalIngredientsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    FavouriteCocktailsComponent
  ]
})
export class FavModule { }
