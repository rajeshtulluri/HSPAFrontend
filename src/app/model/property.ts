import { IPropertyBase } from "./iproperty-base";

export class Property implements IPropertyBase{
    Id!:Number;
    SellRent!: Number;
    Name!: string;
    FType!: string;
    PType!: string;
    BHK!: number;
    BuiltArea!: number;
    city!: string;
    RTM!: boolean;
    estpossession!: string;
   
    Price!: number;
    Image?: string | undefined;
    carpetArea?: number;
    address?: string;
    address2?: string;
    floorNo?: string;
    totalFloors?: string;
    age?: string;
    mainEntrance?: string;
    security?: number;
    gated?: boolean;
    maintenance?: number;
    description?: string;
    PostedOn?: string
    PostedBy?: number;
}