import { Publisher, Subjects, TicketUpdatedEvent } from '@dishen/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
