import { Brands } from '../homepage/non-authenticated/vehicle-brand-details/brands';
import { Category } from '../homepage/non-authenticated/vehicle-category-details/category';

export class User
{
    userid ?: number;
    firstname : string;
    lastname: string;
    email:string;
    password: string;
    mobileno : number;
    address: string;
    pincode: string;
    categoryid: Category;
    brandid: Brands;
    usertype : string;

}
