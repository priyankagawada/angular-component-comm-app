import { Component, OnInit } from '@angular/core';
import { IncrementService } from '../services/increment.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  private service: IncrementService;
  count2:number;
  // inject the increment service
  // injector service will inject the incrementservice object
  constructor(service: IncrementService) { 
    console.log('B component instantiated')
    this.service = service;
  }

  // call to the service functions
  ngOnInit(): void {
    this.count2 = this.service.incrementValue();
  }

  incrementValue()
  {
    this.count2 = this.service.incrementValue();
  }
  
}
