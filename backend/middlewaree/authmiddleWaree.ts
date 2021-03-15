import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const authmiddleWaree = (req: Request & { user }, res: Response, next: Function) => {
  if (req.method === 'OPTIONS') {
    next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      res.status(400).json({ message: 'Пользователь не авторизован' });
    }
    const decodateData = jwt.verify(token, 'SECRET_KEY_RANDOM');
    req.user = decodateData;
    next();
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: 'Пользователь не авторизован', e });
  }
};
