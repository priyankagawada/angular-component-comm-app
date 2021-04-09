import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  // @Input will bind porperty with the parent data
  @Input('id')
  customerId:number;

  @Input('name')
  customerName: string;

  constructor() {
    console.log('customer detail component')
   }

  ngOnInit(): void {
  }

}
