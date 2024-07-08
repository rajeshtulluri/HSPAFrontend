import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{map} from 'rxjs/operators'
import {Observable} from 'rxjs';
import { IProperty } from '../property/iProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent:Number): Observable<IProperty[]>{
    return this.http.get<{[key:string]:any}>('data/properties.json').pipe(
      map((data)=> {
        const propertiesArray: Array<IProperty>=[];
        for(const id in data){
          if(data.hasOwnProperty(id)&& data[id].SellRent===SellRent){
          propertiesArray.push(data[id]);
        }}
        return propertiesArray;
      })
    );
  }
}
