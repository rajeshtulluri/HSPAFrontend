import { Component, KeyValueDiffers, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/iproperty-base'
import { Property } from 'src/app/model/property';
import { AlertifyService } from 'src/app/services/alertify.service';
import { HousingService } from 'src/app/services/housing.service';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
[x: string]: any;
  //@ViewChild('Form') addPropertyForm!: NgForm;
  @ViewChild('formTabs') formTabs?: TabsetComponent;
  propertyType: Array<string>=["House", "Apartment", "Duplex"];
  furnishType: Array<string>=["fully", "Semi", "Unfurnished"];
  propertyView:IPropertyBase={
    Id: 0,
    SellRent: 0,
    Name: '',
    PType: '',
    FType: '',
    Price: 0,
    BHK: 0,
    BuiltArea: 0,
    city: '',
    RTM: false,
    estpossession: ''
  };
  addPropertyForm!: FormGroup;
  nextClicked: boolean | undefined;
  property: Property ={} as Property;

  

  constructor(private router:Router, private fb:FormBuilder, private housingService: HousingService, private alertify: AlertifyService){}

  CreateAddPropertyForm(){
    this.addPropertyForm=this.fb.group({
      BasicInfo: this.fb.group({
        SellRent: [null, Validators.required],
        BHK: [null, Validators.required],
        PType: [null, Validators.required],
        FType: [null, Validators.required],
        Name: [null, Validators.required],
        City: [null, Validators.required]
      }),
      PriceInfo: this.fb.group({
        Price: [null, Validators.required],
        BuiltArea: [null, Validators.required],
        CarpetArea: [null],
        Security: [0],
        Maintenance: [0],
      }),
      AddressInfo: this.fb.group({
        Floor: [null],
        TotalFloor: [null],
        Address: [null, Validators.required],
        LandMark: [null],
    }),
    OtherInfo: this.fb.group({
      RTM: [null, Validators.required],
      
      AOP: [null],
      Gated: [null],
      estpossession:[null, Validators.required],
      
      MainEntrance: [null],
      Description: [null]
    })

    });
  }
//Getter method
get BasicInfo()
{

  return this.addPropertyForm.controls['BasicInfo'] as FormGroup;
}
get PriceInfo() {
  return this.addPropertyForm.controls['PriceInfo'] as FormGroup;
}

get AddressInfo() {
  return this.addPropertyForm.controls['AddressInfo'] as FormGroup;
}

get OtherInfo() {
  return this.addPropertyForm.controls['OtherInfo'] as FormGroup;
}



get SellRent()
{
  return this.BasicInfo.controls['SellRent'] as FormControl;
}
get Name() {
  return this.BasicInfo.controls['Name'] as FormControl;
}


get BHK() {
  return this.BasicInfo.controls['BHK'] as FormControl;
}

get PType() {
  return this.BasicInfo.controls['PType'] as FormControl;
}

get FType() {
  return this.BasicInfo.controls['FType'] as FormControl;
}


get City() {
  return this.BasicInfo.controls['City'] as FormControl;
}

get Price() {
  return this.PriceInfo.controls['Price'] as FormControl;
}

get BuiltArea() {
  return this.PriceInfo.controls['BuiltArea'] as FormControl;
}

get CarpetArea() {
  return this.PriceInfo.controls['CarpetArea'] as FormControl;
}

get Security() {
  return this.PriceInfo.controls['Security'] as FormControl;
}

get Maintenance() {
  return this.PriceInfo.controls['Maintenance'] as FormControl;
}

get Floor() {
  return this.AddressInfo.controls['Floor'] as FormControl;
}

get TotalFloor() {
  return this.AddressInfo.controls['TotalFloor'] as FormControl;
}

get Address() {
  return this.AddressInfo.controls['Address'] as FormControl;
}

get LandMark() {
  return this.AddressInfo.controls['LandMark'] as FormControl;
}

get RTM() {
  return this.OtherInfo.controls['RTM'] as FormControl;
}

get estpossession() {
  return this.OtherInfo.controls['estpossession'] as FormControl;
}


get AOP() {
  return this.OtherInfo.controls['AOP'] as FormControl;
}

get Gated() {
  return this.OtherInfo.controls['Gated'] as FormControl;
}

get MainEntrance() {
  return this.OtherInfo.controls['MainEntrance'] as FormControl;
}

get Description() {
  return this.OtherInfo.controls['Description'] as FormControl;
}

ngOnInit(): void {
  this.CreateAddPropertyForm();
}

OnBack()
{
  this.router.navigate(['/'])
}
onSubmit()
{
  this.nextClicked=true;
 
  if(this.allTabsValid()){
    
    if(!this.property)
    {this.property = new Property();}
    this.mapProperty();
    this.housingService.addProperty(this.property);
    
  console.log("Submitted");
  console.log('SellRent='+this.addPropertyForm.value.BasicInfo.SellRent);
  console.log(this.addPropertyForm);
  this.alertify.success("Congratulations Your Property Listed SuccessFully");
  if(this.SellRent.value==2)
  {
    this.router.navigate(['/rent-property']);
  }else{
    this.router.navigate(['/']);
  }
  
 
  }
  else{
    this.alertify.error("Please Provide all details of form and submit");
  }
  
}
selectTab1(tabId: number,IsCurrentTabValid: boolean) {
    this.nextClicked=true;
  if (IsCurrentTabValid && this.formTabs) {
    this.formTabs.tabs[tabId].active = true;
  }
}

mapProperty(): void {
  if(this.property){
    this.property.Id=this.housingService.newPropID();
  this.property.SellRent= +this.SellRent.value;
  this.property.BHK= this.BHK.value;
  this.property.PType= this.PType.value;
  this.property.Name = this.Name.value;
  this.property.city = this.City.value;
  this.property.FType = this.FType.value;
  this.property.Price = this.Price.value;
  this.property.security = this.Security.value;
  this.property.maintenance = this.Maintenance.value;
  this.property.BuiltArea = this.BuiltArea.value;
  this.property.carpetArea = this.CarpetArea.value;
  this.property.floorNo = this.Floor.value;
  this.property.totalFloors = this.TotalFloor.value;
  this.property.address = this.Address.value;
  this.property.address2 = this.LandMark.value;
  this.property.RTM= this.RTM.value;
  this.property.gated = this.Gated.value;
  this.property.mainEntrance = this.MainEntrance.value;
  this.property.estpossession = this.estpossession.value;
  this.property.description = this.Description.value;
  
  this.property.PostedOn= new Date().toString();
}
}

  allTabsValid():boolean{

    if(this.BasicInfo.invalid)
      {  if(this.formTabs?.tabs[0])
        {this.formTabs.tabs[0].active=true;}
        return false;
      }
      if(this.PriceInfo.invalid)
      {  if(this.formTabs?.tabs[1])
        {this.formTabs.tabs[1].active=true;}
        return false;
      }
      if(this.AddressInfo.invalid)
        {  if(this.formTabs?.tabs[2])
          {this.formTabs.tabs[2].active=true;}
          return false;
        }
      if(this.OtherInfo.invalid)
        {  if(this.formTabs?.tabs[3])
          {this.formTabs.tabs[3].active=true;}
          return false;
        }
        return true;
  }
selectTab(tabId: number) {
  this.nextClicked=true;
  if (this.formTabs?.tabs[tabId]) {
    this.formTabs.tabs[tabId].active = true;
  }
}
}
