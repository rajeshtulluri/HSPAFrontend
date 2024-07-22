import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{map} from 'rxjs/operators'
import {Observable} from 'rxjs';
import { IPropertyBase } from 'src/app/model/iproperty-base';
import { Property } from 'src/app/model/property';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getProperty(id:number){
        return this.getAllProperties().pipe(
          map(propertiesArray=>{return propertiesArray.find(p=>p.Id===id);

            })
          );
  }

  getAllProperties(SellRent?:Number): Observable<Property[]>{
    return this.http.get<{[key:string]:any}>('data/properties.json').pipe(
      map((data)=> { console.log("dataaa from Json file", data);
        const propertiesArray: Array<Property>=[];
        let prop=localStorage.getItem('newProp');
        if(prop)
        {
          const localProperties= JSON.parse(prop);
          if(localProperties)
          {  
            for(const id in localProperties)
              { if(SellRent)
                {
                  if(localProperties.hasOwnProperty(id)&& data[id].SellRent===SellRent)
                    {
                        propertiesArray.push(localProperties[id]);
                    }
                }else {
                  propertiesArray.push(localProperties[id]);
                }
              }

          }
        }

        for(const id in data){
          if(SellRent){
          if(data.hasOwnProperty(id)&& data[id].SellRent===SellRent){
          propertiesArray.push(data[id]);
        }} else {
          propertiesArray.push(data[id]);
        }
      }
        console.log("Data from PropertiesAtrray", propertiesArray);
        return propertiesArray;
      })
    );
  }
 
  addProperty(property: Property) 
  { let newProp=[property];
    let prop=localStorage.getItem('newProp');
    if(prop)
    {
      newProp=[property, ...JSON.parse(prop)];
    }
    localStorage.setItem('newProp', JSON.stringify(newProp));
  }
  newPropID() {
    let pid = localStorage.getItem('PID');
    if (pid !== null) {
      let newPid = +pid + 1;
      localStorage.setItem('PID', String(newPid));
      return newPid;
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }
}
