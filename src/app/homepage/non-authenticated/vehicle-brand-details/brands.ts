import { Category } from "../vehicle-category-details/category";

export class Brands {

  public  brandid: number;
  public  categoryid?: Category;
  public  name?: string;
  public  branddescription?: string;
  public  image?: string;

  constructor() {
    this.brandid = 0;
  }
}
