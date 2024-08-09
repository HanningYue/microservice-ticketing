import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from '@jamieyuetickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
