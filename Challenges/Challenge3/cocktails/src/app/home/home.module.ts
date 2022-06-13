import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { ListComponent } from './components/list/list.component';
import { ReviewComponent } from './components/list/review/review.component';




@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,
    ReviewComponent,


  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    ListComponent,
    ReviewComponent
  ]
})
export class HomeModule {

}
