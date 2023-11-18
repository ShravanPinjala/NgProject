import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent {
  Laptops: Array<any> = [
    {
      "Id": 1,
      "Name": "HP Pavilion",
      "Type": "Business",
      "Price": 500
    },
    {
      "Id": 2,
      "Name": "Dell Inspiron 500",
      "Type": "Business",
      "Price": 450
    },
    {
      "Id": 3,
      "Name": "Acer Swift",
      "Type": "Business",
      "Price": 520
    },
    {
      "Id": 4,
      "Name": "HP Omen",
      "Type": "Gaming",
      "Price": 1000
    },
    {
      "Id": 5,
      "Name": "Dell G15",
      "Type": "Gaming",
      "Price": 1100
    },
    {
      "Id": 6,
      "Name": "Acer Nitro 5",
      "Type": "Business",
      "Price": 1000
    },

  ]
}
