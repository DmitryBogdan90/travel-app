import { check } from 'express-validator';
import { Router } from 'express';

import { login, registration } from '../authorization/authorization';

const router = Router();

router.post(
  '/registration',
  [
    check('username', 'Username cannot be empty').notEmpty(),
    check('password').isLength({ min: 4, max: 10 }),
  ],
  registration,
);

router.post('/login', login);

module.exports = router;
