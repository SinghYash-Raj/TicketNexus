import { Publisher, Subjects, TicketCreatedEvent } from '@yrsticket/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
