import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@jamieyuetickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
