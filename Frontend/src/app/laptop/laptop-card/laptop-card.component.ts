import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop-card',
  templateUrl: './laptop-card.component.html',
  styleUrls: ['./laptop-card.component.css']
})
export class LaptopCardComponent implements OnInit {
  
@Input() laptop_card: any
  constructor() { }

  ngOnInit() {
  }

}
