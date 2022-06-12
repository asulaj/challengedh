import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';

import { FormComponent } from './search/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { TableListComponent } from './search/table-list/table-list.component';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormComponent,
    TableListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
