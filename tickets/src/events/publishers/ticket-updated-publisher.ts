import { Publisher, Subjects, TicketUpdatedEvent } from '@yrsticket/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
