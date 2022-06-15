import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { ListComponent } from './components/list/list.component';
import { ReviewComponent } from './components/list/review/review.component';
import { HelloComponent } from './components/hello/hello.component';
import {FormsModule} from '@angular/forms';
import { IngredientsComponent } from './components/list/ingredients/ingredients.component';




@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,
    ReviewComponent,
    HelloComponent,
    IngredientsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
    
  ],
  exports: [
    HeroComponent,
    ListComponent,
    ReviewComponent
  ]
})
export class HomeModule {

}
