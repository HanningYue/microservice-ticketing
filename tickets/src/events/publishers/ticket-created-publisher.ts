import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@jamieyuetickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
