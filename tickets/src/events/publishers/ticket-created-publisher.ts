import { Publisher, Subjects, TicketCreatedEvent } from '@dishen/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
