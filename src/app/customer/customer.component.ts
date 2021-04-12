import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  
  // property to store current customer details
  editCustomer:Customer={};

  // Query the template of child component and its properties
  // Query the template to get DOM elements from the template


  constructor() {
    console.log('customer component')
  }

  ngOnInit(): void {
  }

  onEditClicked(event, i){
    console.log('customer details - ', event);
    //this.editCustomer.id = event.c.id  
    //this.editCustomer.name = event.c.name;

    this.editCustomer.id = this.customers[i].id;
    this.editCustomer.name = this.customers[i].name;
    this.editCustomer.location = this.customers[i].location;
    this.editCustomer.orders = this.customers[i].orders;
  }
//event handler is called on click Update button on Modal window
  onUpdateClick(){
    console.log(JSON.stringify(this.editCustomer))
    // service that will send editCustomer object to the backend
  }
  
}
