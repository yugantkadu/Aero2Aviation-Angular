import { User } from "src/app/auth/user";
import { Brands } from "../../non-authenticated/vehicle-brand-details/brands";

export class Products
{
    productid:number;
    brandid:Brands;
    manufacturerid:User;
    productname:String;
    productdescription:String;
    productimage:String;
    quantityinstock:number;
    buyprice:number;

}
