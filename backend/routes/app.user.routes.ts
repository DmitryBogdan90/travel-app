import { Router, Request, Response } from 'express';
import { AuthController } from '../authorization/authorization';
import { check } from 'express-validator';
const router = Router();

router.post(
  '/registration',
  [
    check('username', 'Username cannot be empty').isEmpty(),
    check('password').isLength({ min: 4, max: 10 }),
  ],
  AuthController.registration,
);

module.exports = router;
