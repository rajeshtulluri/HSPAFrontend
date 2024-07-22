import { Component, Input } from '@angular/core';
import { IPropertyBase } from 'src/app/model/iproperty-base';
import { Property } from 'src/app/model/property';


@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {
  @Input() property: Property={} as Property;
  
  @Input()hideIcons: boolean=true;

  
}
