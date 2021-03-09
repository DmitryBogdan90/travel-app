import { Router } from 'express';
import { registration } from '../authorization/authorization';
import { check } from 'express-validator';
const router = Router();

router.post(
  '/registration',
  [
    check('username', 'Username cannot be empty').notEmpty(),
    check('password').isLength({ min: 4, max: 10 }),
  ],
  registration,
);

module.exports = router;
