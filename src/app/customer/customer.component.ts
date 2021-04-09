import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from 'src/dt-data';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  // Read the data from dt-data.ts
  // customer1 = CUSTOMERS[0];
  // customer2 = CUSTOMERS[1];
  // customer3 = CUSTOMERS[2];

  customers = CUSTOMERS;
  
  constructor() { 
    console.log('customer component')
  }

  ngOnInit(): void {
  }

}
