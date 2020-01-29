import React from 'react';
import { Card, CardContent, Icon, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import FuseAnimate from '../../../ThemeComponents/Animate';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {}
}));

function MailConfirmPage() {
  const classes = useStyles();

  return (
    <div
      className={clsx(
        classes.root,
        'bg-gray-900 flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32'
      )}
    >
      <div className='flex flex-col items-center justify-center w-250'>
        <FuseAnimate animation='transition.expandIn'>
          <Card className='w-full max-w-384'>
            <CardContent className='flex flex-col items-center justify-center p-10'>
              <div className='m-20'>
                <Icon className='text-50' color='action'>
                  email
                </Icon>
              </div>

              <Typography variant='h5' className='text-center mb-16'>
                Confirm your email address!
              </Typography>

              <Typography
                className='text-center mb-16 w-full'
                color='textSecondary'
              >
                A confirmation e-mail has been sent to{' '}
                <b>baytroninfo@info.co.ke</b>.
              </Typography>

              <Typography className='text-center w-full' color='textSecondary'>
                Check your inbox and click on the "Confirm my email" link to
                confirm your email address.
              </Typography>

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

export default MailConfirmPage;
