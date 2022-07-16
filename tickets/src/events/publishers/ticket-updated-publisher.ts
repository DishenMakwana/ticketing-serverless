import { Publisher, Subjects, TicketUpdatedEvent } from '@dishen/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
