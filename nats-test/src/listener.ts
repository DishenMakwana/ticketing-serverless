import nats, { Message } from 'node-nats-streaming';
import { randomBytes } from 'crypto';

// console.clear();

const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
  url: 'http://localhost:4222',
});

stan.on('connect', () => {
  console.log('Listener connected to NATS');

  stan.on('close', () => {
    console.log('NATS [listener] connection closed!');
    process.exit();
  });

  const options = stan
    .subscriptionOptions()
    .setManualAckMode(true)
    .setDeliverAllAvailable()
    .setDurableName('accounting-service');

  const subscription = stan.subscribe(
    'ticket:created',
    'order-service-queue-group',
    options
  );

  subscription.on('message', (msg: Message) => {
    console.log(
      `Received event: #${msg.getSequence()}, with data ${msg.getData()}`
    );

    msg.ack();
  });
});

process.on('SIGINT', () => stan.close());
process.on('SIGTERM', () => stan.close());
