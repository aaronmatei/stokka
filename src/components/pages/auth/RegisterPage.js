import React from 'react';
import {
  Button,
  Card,
  CardContent,
  Checkbox,
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

function RegisterPage() {
  const classes = useStyles();

  function handleSubmit(ev) {
    ev.preventDefault();
  }

  return (
    <div
      className={clsx(
        classes.root,
        'bg-gray-900 flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32'
      )}
    >
      <div className='flex flex-col items-center justify-center w-9/12'>
        <FuseAnimate animation='transition.expandIn'>
          <Card className='w-6/12'>
            <CardContent className='flex flex-col items-center justify-center p-10'>
              <img
                className='w-90 m-5'
                src='assets/images/logos/fuse.svg'
                alt='logo'
              />

              <Typography variant='h6' className='mt-16 mb-10'>
                CREATE AN ACCOUNT
              </Typography>

              <form
                name='registerForm'
                noValidate
                className='flex flex-col justify-center w-full'
                onSubmit={handleSubmit}
              >
                <TextField
                  className='mb-16'
                  label='Name'
                  autoFocus
                  type='name'
                  name='name'
                  margin='normal'
                  variant='outlined'
                  required
                  fullWidth
                />

                <TextField
                  className='mb-16'
                  label='Email'
                  type='email'
                  name='email'
                  margin='normal'
                  variant='outlined'
                  required
                  fullWidth
                />

                <TextField
                  className='mb-16'
                  label='Password'
                  type='password'
                  name='password'
                  margin='normal'
                  variant='outlined'
                  required
                  fullWidth
                />

                <TextField
                  className='mb-16'
                  label='Password (Confirm)'
                  type='password'
                  name='passwordConfirm'
                  margin='normal'
                  variant='outlined'
                  required
                  fullWidth
                />

                <FormControl className='items-center'>
                  <FormControlLabel
                    control={<Checkbox name='acceptTermsConditions' />}
                    label='I read and accept terms and conditions'
                  />
                </FormControl>

                <Button
                  variant='contained'
                  color='primary'
                  className='w-224 mx-auto mt-16'
                  aria-label='Register'
                  type='submit'
                >
                  CREATE AN ACCOUNT
                </Button>
              </form>

              <div className='flex flex-col items-center justify-center pt-20 pb-10'>
                <span className='font-medium'>Already have an account?</span>
                <Link className='font-medium' to='/auth/login'>
                  Login
                </Link>
              </div>
            </CardContent>
          </Card>
        </FuseAnimate>
      </div>
    </div>
  );
}

export default RegisterPage;
