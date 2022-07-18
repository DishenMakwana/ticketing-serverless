import { Publisher, OrderCancelledEvent, Subjects } from '@dishen/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
