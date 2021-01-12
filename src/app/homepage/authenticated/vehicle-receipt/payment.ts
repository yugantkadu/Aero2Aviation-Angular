import { OrderDetails } from "../vehicle-order/order-details";

export class Payment {
  public paymentid?: number;
  public orderid: OrderDetails;
  public razorpaypaymentid: string;
  public razorpayorderid: string;
  public amount: number;
  public paymentmode: string;
  public paymentdate: string;
}
