import { Injectable } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class AppService {
  handleOrderPlaced(order: OrderDto) {
    console.log('Received a new order - customer: ', order.email);
  }
}
