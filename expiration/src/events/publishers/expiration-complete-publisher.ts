import { Subjects, Publisher, ExpirationCompleteEvent } from '@dishen/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
