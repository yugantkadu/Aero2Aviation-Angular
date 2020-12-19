import { User } from "src/app/auth/user";
import { Products } from "../vehicle-add/products";

export class OrderDetails {
  orderid: number;
  retailerid: User;
  productid: Products;
  quantityordered: number;
  price : number;
}
