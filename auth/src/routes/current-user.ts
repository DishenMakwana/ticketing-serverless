import express, { Request, Response } from 'express';

import { currentUser, requireAuth } from '@dishen/common';

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
