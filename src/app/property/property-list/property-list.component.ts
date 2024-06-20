import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  properties:Array<any>=[
    {
    "Id":1,
    "Type":"House",
    "Price":1200,
    "Name":"Birla House"
    
    },
    {
        "Id":2,
        "Type":"House",
        "Price":1900,
        "Name":"Nanda House"
        
    },
    {
            "Id":3,
            "Type":"House",
            "Price":1400,
            "Name":"Tata House"
            
    },
    {
      "Id":4,
      "Type":"House",
      "Price":1100,
      "Name":"Jagan House"
      
    },
   {
          "Id":5,
          "Type":"House",
          "Price":1500,
          "Name":"Kusmanch House"
          
    },
    {
      "Id":6,
      "Type":"House",
      "Price":1900,
      "Name":"Tmp House"
      
    }
    ]
}
