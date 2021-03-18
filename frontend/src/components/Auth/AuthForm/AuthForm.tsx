import React, { useState } from 'react';
import axios from 'axios';
import { Avatar, Button, Container, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useStyles } from '../useStyles';

type Inputs = {
  username: string;
  password: string;
};

const AuthForm = ({ isSignUp }: any) => {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(
    'https://www.iconspng.com/images/-abstract-user-icon-1/-abstract-user-icon-1.jpg',
  );
  const [loadingStatus, setLoadingStatus] = useState('Upload photo');
  const { register, handleSubmit, errors } = useForm<Inputs>({
    mode: 'onBlur',
  });

  const onSubmit = async (data: object) => {
    let res;
    if (isSignUp) {
      res = await axios.post('https://travel-app-prod.herokuapp.com/users/registration', {
        ...data,
        avatar,
      });
    }

    res = await axios.post('https://travel-app-prod.herokuapp.com/users/login', data);
    localStorage.setItem('token', res.data.token);
    history.push('/travel-app');
    return res.data;
  };

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleAvatarChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoadingStatus('Uploading...');
    // @ts-ignore
    const files = Array.from(event.target.files);
    const formData = new FormData();
    files.forEach((file, i) => {
      formData.append(String(i), file);
    });

    const res = await axios.post('https://travel-app-prod.herokuapp.com/avatar/create', formData);
    setLoadingStatus('Uploaded');
    setAvatar(res.data.url);
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
          onChange={handleUserNameChange}
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
            <input
              style={{ display: 'none' }}
              id="upload-photo"
              name="upload-photo"
              type="file"
              onChange={handleAvatarChange}
            />
            <Button
              className={classes.uploadBtn}
              color="secondary"
              variant="contained"
              component="span">
              {loadingStatus}
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
