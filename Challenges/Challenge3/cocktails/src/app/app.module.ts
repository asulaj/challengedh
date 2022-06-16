
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';


import { FavModule } from './fav/fav.module';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { DescriptionPipe } from './description.pipe';




@NgModule({
  declarations: [
    AppComponent,
    DescriptionPipe
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HomeModule,
    SharedModule,
    HomeModule,
    HttpClientModule,
    FavModule,
    FormsModule,
    ReactiveFormsModule,    
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
