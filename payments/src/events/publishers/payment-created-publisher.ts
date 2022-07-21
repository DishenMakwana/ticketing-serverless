import { PaymentCreatedEvent, Publisher, Subjects } from '@dishen/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
