import { Injectable } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class OrdersService {
  constructor() {}
  placeOrder(order: OrderDto) {
    console.log(order);
  }
}
