

import { Component,OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../iProperty.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit{
  properties: Array<IProperty>=[];
  SellRent=1;
  constructor(private housingService: HousingService, private route:ActivatedRoute){
    
  }
    ngOnInit(): void
    { if(this.route.snapshot.url.toString())
      {
        this.SellRent=2;
      }
      this.housingService.getAllProperties(this.SellRent).subscribe(data=>{
       this.properties=data;
       console.log(data);
       console.log(this.route.snapshot.url.toString());
       console.log(data)}, error=>{
        console.log(error);
       }
      
      );
    }
}
