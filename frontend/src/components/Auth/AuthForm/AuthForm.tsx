import React, { useState } from 'react';
import { Avatar, Button, Container, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useForm } from 'react-hook-form';

import { useStyles } from '../useStyles';

type Inputs = {
  username: string;
  password: string;
};

const AuthForm = ({ isSignUp }: any) => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { register, handleSubmit, errors } = useForm<Inputs>({
    mode: 'onBlur',
  });

  const onSubmit = () => {};

  const handleUserNamelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <Container maxWidth="xs" className={classes.formWrapper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h5">{isSignUp ? 'Sing up' : 'Log in'}</Typography>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        {errors.username && <span style={{ color: 'red' }}>Username is required</span>}
        <TextField
          inputRef={register({ required: true })}
          value={username}
          onChange={handleUserNamelChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
        />
        {errors.password && (
          <span style={{ color: 'red' }}>Password must be more than 4 symbols</span>
        )}
        <TextField
          inputRef={register({ required: true, minLength: 4 })}
          value={password}
          onChange={handlePasswordChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        {isSignUp ? (
          <label htmlFor="upload-photo" className={classes.uploadLabel}>
            <input style={{ display: 'none' }} id="upload-photo" name="upload-photo" type="file" />
            <Button
              className={classes.uploadBtn}
              color="secondary"
              variant="contained"
              component="span">
              Upload photo
            </Button>
          </label>
        ) : (
          ''
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}>
          {isSignUp ? 'Sign up' : 'Log in'}
        </Button>
      </form>
    </Container>
  );
};

export default AuthForm;
