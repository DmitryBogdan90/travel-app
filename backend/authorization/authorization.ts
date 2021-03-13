import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

import User from '../model/User';

const generateAccessToken = (id: String) => {
  const payload = { id };
  return jwt.sign(payload, 'SECRET_KEY_RANDOM');
};

export const registration = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Registration error', errors });
    }
    const { username, password, avatar } = req.body;
    const person = await User.findOne({ username });
    if (person) {
      res.status(400).json({ message: 'User with this name is already registered' });
    }
    const hashPassword = bcrypt.hashSync(password, 2);
    const user = new User({ username, password: hashPassword, avatar });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (e) {
    res.status(400).json({ message: 'Registration error' });
  }
  return null;
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      res.status(400).json({ message: `User ${username} doesn't found ` });
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Invalid password' });
    }
    const token = generateAccessToken(user.id);
    return res.json({ token });
  } catch (e) {
    res.status(400).json({ message: 'Login error' });
  }
  return null;
};
