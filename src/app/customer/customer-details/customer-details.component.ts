import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  // @Input will bind porperty with the parent data
  /*@Input('id')
  customerId:number;

  @Input('name')
  customerName: string;
*/

  @Input()
  customer: Customer;
  @Input('recordIndex')
  i: number;

  // declare an event
  // Every event object contains payload
  // EventEmitter<T> can be string, number, boolean, Observable, array, object
  @Output()
  editClick: EventEmitter<{}> = new EventEmitter();


  constructor() {
    console.log('customer detail component')
  }

  ngOnInit(): void {
  }

  // event handler is called on raising click event on EDIT button
  onEditClicked(){
    let c = this.customer; // current card with edit button clicked
    let i = this.i;
    console.log('button clicked');
    // raise another event
    this.editClick.emit( { c, i });
  }
}
