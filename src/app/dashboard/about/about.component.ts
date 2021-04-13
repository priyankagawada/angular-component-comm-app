import { Component, OnInit } from '@angular/core';
import { IncrementService } from 'src/app/services/increment.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private service: IncrementService;
  count:number;
  constructor(service: IncrementService) {
    this.service = service;
   }

  ngOnInit(): void {
    this.count = this.service.incrementValue();
  }

}
