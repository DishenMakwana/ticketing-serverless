import Queue from 'bull';
import { queueGroupName } from '../events/listeners/queue-group-name';
import { ExpirationCompletePublisher } from '../events/publishers/expiration-complete-publisher';
import { natsWrapper } from '../nats-wrapper';

interface Payload {
  orderId: string;
}

const expirationQueue = new Queue<Payload>('order:expiration', {
  redis: {
    host: process.env.REDIS_HOST,
  },
});

expirationQueue.process(async (job) => {
  new ExpirationCompletePublisher(natsWrapper.client).publish({
    orderId: job.data.orderId,
  });

  console.log(
    'I want to publish an ' +
      queueGroupName +
      ' event for orderId: ' +
      job.data.orderId
  );
});

export { expirationQueue };
