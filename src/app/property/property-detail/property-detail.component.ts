import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';

import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';


@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit{
  public propertyId!: number;
  property=new Property();
  galleryOptions!:NgxGalleryOptions[];
  galleryImages!:NgxGalleryImage[];

constructor(private route:ActivatedRoute, private router:Router, private housingService:HousingService)
{

}



ngOnInit(): void {
  this.galleryOptions = [
    {
      width: '100%',
      height: '465px',
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide
    },
   
  ];
  this.galleryImages = [
    {
      small: 'assets/image/Internal-1.jpg',
      medium: 'assets/image/Internal-1.jpg',
      big: 'assets/image/Internal-1.jpg'
    },
    {
      small: 'assets/image/Internal-2.jpg',
      medium: 'assets/image/Internal-2.jpg',
      big: 'assets/image/Internal-2.jpg'
    },
    {
      small: 'assets/image/Internal-3.jpg',
      medium: 'assets/image/Internal-3.jpg',
      big: 'assets/image/Internal-3.jpg'
    },
    
  ];
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
           this.property.floorNo=data?.floorNo;
           this.property.totalFloors=data?.totalFloors;
           this.property.age=data?.age;
           this.property.estpossession=data?.estpossession??"";
           this.property.mainEntrance=data?.mainEntrance;
           this.property.gated=data?.gated;
           this.property.security=data?.security;
           this.property.maintenance=data?.maintenance;
           this.property.description=data?.description;
           this.property.address2=data?.address2;
           this.property.address=data?.address;
           this.property.Image=data?.Image;
           this.property.carpetArea=data?.carpetArea;

           
          
        }
      )
    }, error=>this.router.navigate(['/'])
  );
  
}
}
