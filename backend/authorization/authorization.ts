import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import User from '../model/User';

export const registration = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Registration error', errors });
    }
    const { username, password } = req.body;
    const person = await User.findOne({ username });
    if (person) {
      res.status(400).json({ message: 'User with this name is already registered' });
    }
    const hashPassword = bcrypt.hashSync(password, 2);
    const user = new User({ username, password: hashPassword });
    await user.save();
    res.status(400).json({ message: 'User registered successfully' });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: 'Registration error' });
  }
}
