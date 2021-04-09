import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
