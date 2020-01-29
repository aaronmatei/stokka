import React from 'react';
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography
} from '@material-ui/core';
import { darken } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/styles';
import FuseAnimate from '../../../ThemeComponents/Animate';

import clsx from 'clsx';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {}
}));

function ResetPasswordPage() {
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
      <div className='flex flex-col items-center justify-center w-6/12'>
        <FuseAnimate animation='transition.expandIn'>
          <Card className='w-full'>
            <CardContent className='flex flex-col items-center justify-center p-32'>
              <img
                className='w-128 m-20'
                src='assets/images/logos/fuse.svg'
                alt='logo'
              />

              <Typography variant='h6' className='mt-16 mb-32'>
                RESET YOUR PASSWORD
              </Typography>

              <form
                name='resetForm'
                noValidate
                className='flex flex-col justify-center w-full'
                onSubmit={handleSubmit}
              >
                <TextField
                  className='mb-16'
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
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                />

                <Button
                  variant='contained'
                  color='primary'
                  className='w-224 mx-auto mt-16'
                  aria-label='Reset'
                  type='submit'
                >
                  RESET MY PASSWORD
                </Button>
              </form>

              <div className='flex flex-col items-center justify-center pt-20 pb-10'>
                <Link className='font-medium' to='/auth/login'>
                  Go back to login
                </Link>
              </div>
            </CardContent>
          </Card>
        </FuseAnimate>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
