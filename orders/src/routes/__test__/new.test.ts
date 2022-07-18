import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';

it('Returns an error if ticket does not exist', async () => {
  const ticketId = new mongoose.Types.ObjectId();

  await request(app)
    .post('/api/orders')
    .set('Cookie', global.signin())
    .send({ ticketId: ticketId })
    .expect(404);
});

it('Returns an error if ticket is already reserved', async () => {});

it('Reserves a ticket', async () => {});
