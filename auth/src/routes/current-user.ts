import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import catchAsync from '../middlewares/catch.async';

const router = express.Router();

router.get(
  '/api/users/currentuser',
  catchAsync((req: Request, res: Response) => {
    if (!req.session?.jwt) {
      return res.send({ currentUser: null });
    }

    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!);

    res.send({ currentUser: payload });
  })
);

export { router as currentUserRouter };
