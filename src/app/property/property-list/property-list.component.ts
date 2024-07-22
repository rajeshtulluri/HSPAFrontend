

import { Component,OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';

import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/model/property';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit{
onSortDirection() {
if(this.sortDirection==='asc')
{
  this.sortDirection='desc';
}else{
  this.sortDirection='asc';
}
}
SortByParam='';
onCityClear() {
this.SearchCity='';
this.City='';
}

onCityFilteer() {
this.SearchCity=this.City;
}
  today=new Date();
  properties: Array<Property>=[];
  SellRent=1;
  City='';
  SearchCity='';
  sortDirection='asc';
  constructor(private housingService: HousingService, private route:ActivatedRoute){
    
  }
    ngOnInit(): void
    { if(this.route.snapshot.url.toString())
      {
        this.SellRent=2;
      }
      this.housingService.getAllProperties(this.SellRent).subscribe(data=>{
       this.properties=data;
      //  const newProperty = localStorage.getItem('newProp');
      console.log("Data from Property List ",this.properties);
      // console.log(newProperty);
      // if(newProperty)
      // {
      //   if(JSON.parse(newProperty).SellRent===this.SellRent)
      //     {
      //       this.properties=[ ...this.properties, JSON.parse(newProperty)];
      //     }
      // }
       console.log(this.properties);
       console.log(this.route.snapshot.url.toString());
       console.log(data)}, error=>{
        console.log(error);
       }
      
      );
    }
}
