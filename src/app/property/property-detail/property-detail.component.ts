import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit{
  public propertyId!: number;
  property=new Property();
constructor(private route:ActivatedRoute, private router:Router, private housingService:HousingService)
{

}



ngOnInit(): void {
  this.propertyId=Number(this.route.snapshot.params['id']);
  this.route.params.subscribe(
    (params)=>{
      this.propertyId= +params['id'];
      this.housingService.getProperty(this.propertyId).subscribe(
        (data)=>{
         
           this.property.Name=data?.Name??'House Name';
           this.property.BHK=data?.BHK??0;
           this.property.PType=data?.PType??'Property Type';
           this.property.city=data?.city??'city';
           this.property.BuiltArea=data?.BuiltArea??0;
           this.property.FType=data?.FType??'Furniture Type';
           
          
        }
      )
    }
  );
  
}
}
