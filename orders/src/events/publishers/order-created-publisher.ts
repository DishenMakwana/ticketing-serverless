import { Publisher, OrderCreatedEvent, Subjects } from '@dishen/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
