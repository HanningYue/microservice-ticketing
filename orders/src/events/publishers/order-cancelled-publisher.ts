import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from '@jamieyuetickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
