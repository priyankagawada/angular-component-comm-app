import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { FormsModule } from '@angular/forms';
import { DemoModalComponent } from './demo-modal/demo-modal.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { IncrementService } from './services/increment.service';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    DemoModalComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DashboardModule
  ],
  providers: [IncrementService], // information for injector service
  bootstrap: [AppComponent]
})
export class AppModule { }
