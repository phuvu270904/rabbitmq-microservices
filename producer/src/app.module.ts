import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ORDERS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'orders_queue',
        },
      },
    ]),
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
