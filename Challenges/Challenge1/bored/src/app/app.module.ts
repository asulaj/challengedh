import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { GenerateactivityComponent } from './activity/generateactivity/generateactivity.component';
import { FavouriteactivityComponent } from './activity/favouriteactivity/favouriteactivity.component';
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GenerateactivityComponent,
    FavouriteactivityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
