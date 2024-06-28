import { Publisher, OrderCreatedEvent, Subjects } from '@yrsticket/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
