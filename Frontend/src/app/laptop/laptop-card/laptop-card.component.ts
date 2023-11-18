import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop-card',
  templateUrl: './laptop-card.component.html',
  styleUrls: ['./laptop-card.component.css']
})
export class LaptopCardComponent implements OnInit {

  Laptop: any = {
    "Name": "HP Inspiron 500",
    "Id": 1,
    "Type": "Business",
    "Price": 500
  }
  constructor() { }

  ngOnInit() {
  }

}
