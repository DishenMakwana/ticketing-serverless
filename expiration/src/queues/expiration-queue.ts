import Queue from 'bull';
import { queueGroupName } from '../events/listeners/queue-group-name';

interface Payload {
  orderId: string;
}

const expirationQueue = new Queue<Payload>('order:expiration', {
  redis: {
    host: process.env.REDIS_HOST,
  },
});

expirationQueue.process(async (job) => {
  console.log(
    'I want to publish an ' +
      queueGroupName +
      ' event for orderId: ' +
      job.data.orderId
  );
});

export { expirationQueue };
