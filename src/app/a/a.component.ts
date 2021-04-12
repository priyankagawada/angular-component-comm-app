import { Component, Inject, OnInit } from '@angular/core';
import { IncrementService } from '../services/increment.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  private service: IncrementService;
  count1:number;
  // inject the increment service
  // injector service will inject the incrementservice object
  constructor(service: IncrementService) { 
    console.log('A component instantiated')
    this.service = service;
  }

  // call to the service functions
  ngOnInit(): void {
    this.count1 = this.service.incrementValue();
  }

  callIncrement(){
    this.count1 = this.service.incrementValue();
  }

}
