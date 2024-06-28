import { Subjects, Publisher, OrderCancelledEvent } from '@yrsticket/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
