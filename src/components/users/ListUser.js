import React, { Fragment, useContext } from 'react';
import UserContext from '../../context/users/userContext';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Checkbox,
  Card,
  TableContainer,
  Paper,
  Avatar,
  Dialog,
  DialogContentText,
  DialogActions,
  TextField,
  DialogTitle,
  DialogContent
} from '@material-ui/core';
import Animate from '../../ThemeComponents/Animate';
import { blueGrey } from '@material-ui/core/colors';
import { Create, Delete, Visibility } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: `${blueGrey[900]}`
  },
  divider: {
    backgroundColor: 'white'
  },
  container: {
    maxHeight: 800
  }
}));

const ListUserComponent = props => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     users: [],
  //     message: null,
  //     isLoading: false
  //   };
  //   this.deleteUser = this.deleteUser.bind(this);
  //   this.editUser = this.editUser.bind(this);
  //   this.addUser = this.addUser.bind(this);
  //   this.reloadUserList = this.reloadUserList.bind(this);
  // }

  // async componentDidMount() {
  //   try {
  //     this.setState({ isLoading: true });
  //     const response = await fetch(`https://randomuser.me/api/?results=50`);
  //     const json = await response.json();
  //     this.setState({ users: json.results, isLoading: false });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  const classes = useStyles();
  const [message, setMessage] = React.useState(null);
  const [isLoading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const userContext = useContext(UserContext);
  const { users } = userContext;

  // const Fetch = () => {
  //   const [users, setUsers] = React.useState([]);

  //   React.useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         let res = await fetch('https://randomuser.me/api/?results=5'); // sample
  //         let data = await res.json();
  //         setUsers(data.results); // parse json
  //       } catch (error) {
  //         console.log(error);
  //         setLoading(false);
  //       }
  //     };
  //     fetchData();
  //   }, []);
  //   return users;
  // };

  // const users = Fetch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const saveUser = e => {
    e.preventDefault();
    alert('Submitted form!');
    handleClose();
  };

  return (
    <Fragment>
      <Animate animation={{ translateY: [0, '100%'] }} duration={600}>
        <TableContainer component={Paper} className={classes.container}>
          <Typography variant='h4' style={{ textAlign: 'center' }}>
            User Details
          </Typography>
          <Button
            variant='contained'
            color='primary'
            onClick={handleClickOpen}
            style={{ float: 'left', marginLeft: '15px' }}
          >
            Add User
          </Button>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox
                    value='secondary'
                    color='primary'
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
                </TableCell>
                <TableCell>View</TableCell>
                <TableCell align='left'>Edit</TableCell>
                <TableCell align='left'>Delete</TableCell>
                <TableCell>Avatar</TableCell>
                <TableCell>Id</TableCell>
                <TableCell>name</TableCell>
                <TableCell align='left'>LastName</TableCell>
                <TableCell align='left'>Nickname</TableCell>
                <TableCell align='left'>Company</TableCell>
                <TableCell align='left'>Job Title</TableCell>
                <TableCell align='left'>Email</TableCell>
                <TableCell align='left'>Phone</TableCell>
                <TableCell align='left'>Address</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {users.map(row => (
                <TableRow key={row.id.value} hover>
                  <TableCell>
                    <Checkbox
                      value='secondary'
                      color='primary'
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                  </TableCell>
                  <TableCell align='left'>
                    <Visibility cursor='pointer' />
                  </TableCell>
                  <TableCell align='left' onClick={() => this.editUser(row.id)}>
                    <Create cursor='pointer' />
                  </TableCell>
                  <TableCell
                    align='right'
                    onClick={() => this.deleteUser(row.id)}
                  >
                    <Delete cursor='pointer' />
                  </TableCell>

                  <TableCell align='left'>
                    <Avatar src={row.avatar} alt={row.name} />
                  </TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell align='left'>{row.name}</TableCell>
                  <TableCell align='left'>{row.lastName}</TableCell>
                  <TableCell align='left'>{row.nickname}</TableCell>
                  <TableCell align='left'>{row.company}</TableCell>
                  <TableCell align='left'>{row.jobTitle}</TableCell>
                  <TableCell align='left'>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Animate>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Add user</DialogTitle>
        <DialogContent>
          <DialogContentText>Fill in the details below</DialogContentText>
          <form action='/' method='POST' onSubmit={saveUser}>
            <TextField
              type='text'
              placeholder='username'
              fullWidth
              margin='normal'
              name='username'
            />

            <TextField
              type='password'
              placeholder='password'
              fullWidth
              margin='normal'
              name='password'
            />

            <TextField
              placeholder='First Name'
              fullWidth
              margin='normal'
              name='firstName'
            />

            <TextField
              placeholder='Last name'
              fullWidth
              margin='normal'
              name='lastName'
            />

            <TextField
              type='number'
              placeholder='age'
              fullWidth
              margin='normal'
              name='age'
            />

            <TextField
              type='number'
              placeholder='salary'
              fullWidth
              margin='normal'
              name='salary'
            />
            <DialogActions>
              <Button type='submit' color='primary' style={{ float: 'right' }}>
                Save
              </Button>
              <Button
                onClick={handleClose}
                color='primary'
                style={{ float: 'right' }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleClose}
                color='primary'
                style={{ float: 'right' }}
              >
                Close
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default ListUserComponent;
