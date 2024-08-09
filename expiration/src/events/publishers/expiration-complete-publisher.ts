import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@jamieyuetickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
