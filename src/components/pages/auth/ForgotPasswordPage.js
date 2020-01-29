import React from 'react';
import {
  Button,
  Card,
  CardContent,
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

function ForgotPasswordPage() {
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
              <div className='w-100 h-100 m-5'>
                <img src='assets/images/logos/fuse.svg' alt='logo' />
              </div>

              <Typography variant='h6' className='mt-16 mb-12'>
                RECOVER YOUR PASSWORD
              </Typography>

              <form
                name='recoverForm'
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
                  margin='normal'
                  variant='outlined'
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
                  SEND RESET LINK
                </Button>
              </form>

              <div className='flex flex-col items-center justify-center pt-10 pb-10'>
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

export default ForgotPasswordPage;
