
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReviewComponent } from './home/components/list/review/review.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    SharedModule,
    HomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
