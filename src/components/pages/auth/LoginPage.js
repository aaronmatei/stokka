import React from 'react';
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  TextField,
  Typography
} from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';
import FuseAnimate from '../../../ThemeComponents/Animate';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {}
}));

function LoginPage() {
  const classes = useStyles();

  function handleSubmit(ev) {
    ev.preventDefault();
  }

  return (
    <div
      className={clsx(
        classes.root,
        'bg-gray-800 flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32'
      )}
    >
      <div className='flex flex-col items-center justify-center w-300'>
        <FuseAnimate animation='transition.expandIn'>
          <Card className='w-full max-w-384'>
            <CardContent className='flex flex-col items-center justify-center p-32'>
              <img
                className='w-100 m-5'
                src='assets/images/logos/fuse.svg'
                alt='logo'
              />

              <Typography variant='h6' className='mt-16 mb-32'>
                LOGIN TO YOUR ACCOUNT
              </Typography>

              <form
                name='loginForm'
                noValidate
                className='flex flex-col justify-center w-full'
                onSubmit={handleSubmit}
              >
                <TextField
                  label='Email'
                  autoFocus
                  type='email'
                  name='email'
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                />

                <TextField
                  label='Password'
                  type='password'
                  name='password'
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                />

                <div className='flex items-center justify-between'>
                  <FormControl>
                    <FormControlLabel
                      control={<Checkbox name='remember' />}
                      label='Remember Me'
                    />
                  </FormControl>

                  <Link className='font-medium' to='/auth/forgotpassword'>
                    Forgot Password?
                  </Link>
                </div>

                <Button
                  variant='contained'
                  color='primary'
                  className='w-224 mx-auto mt-16'
                  aria-label='LOG IN'
                  type='submit'
                >
                  LOGIN
                </Button>
              </form>

              <div className='mt-5 mb-10 flex items-center justify-center'>
                <Divider className='w-32' />
                <span className='mx-8 font-bold'>OR</span>
                <Divider className='w-32' />
              </div>

              <div className='mb-5'>
                <Button
                  variant='contained'
                  color='secondary'
                  size='small'
                  className=''
                >
                  Log in with Google
                </Button>
              </div>
              <div className='mb-5'>
                <Button
                  variant='contained'
                  color='primary'
                  size='small'
                  className=''
                >
                  Log in with Facebook
                </Button>
              </div>

              <div className='flex flex-col items-center justify-center pt-10 pb-10'>
                <span className='font-medium'>Don't have an account?</span>
                <Link to='/auth/register'>Create an account</Link>
              </div>
            </CardContent>
          </Card>
        </FuseAnimate>
      </div>
    </div>
  );
}

export default LoginPage;
