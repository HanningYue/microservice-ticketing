import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from '@jamieyuetickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
