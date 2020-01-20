import React, { Component } from 'react';
import axios from 'axios';
import ApiService from '../../service/ApiService';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Checkbox,
  Card
} from '@material-ui/core';
import Animate from '../../ThemeComponents/Animate';
import { blueGrey } from '@material-ui/core/colors';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles(theme => ({
  root: {
    background: `${blueGrey[900]}`
  },
  divider: {
    backgroundColor: 'white'
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

  const Fetch = () => {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
      const fetchData = async () => {
        try {
          let res = await fetch('https://randomuser.me/api/?results=50'); // sample
          let data = await res.json();
          setUsers(data.results); // parse json
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      };
      fetchData();
    }, []);
    return users;
  };

  const users = Fetch();

  function deleteUser(userId) {
    ApiService.deleteUser(userId).then(res => {
      this.setState({ message: 'User deleted successfully.' });
      this.setState({
        users: this.state.users.filter(user => user.id !== userId)
      });
    });
  }

  const editUser = id => {
    window.localStorage.setItem('userId', id);
    this.props.history.push('/edit-user');
  };

  const addUser = () => {
    window.localStorage.removeItem('userId');
    this.props.history.push('/add-user');
  };

  if (isLoading) {
    return <div>Loading..</div>;
  }

  return (
    <div
      className={clsx(
        classes.root,
        'flex-grow flex-shrink-0 p-0 sm:p-5 print:p-0'
      )}
    >
      <Animate animation={{ translateY: [0, '100%'] }} duration={600}>
        <Card className='mx-auto w-xl print:w-full print:shadow-none'>
          <Typography variant='h4' style={style}>
            User Details
          </Typography>
          <Button variant='contained' color='primary' href='/add-user'>
            Add User
          </Button>

          <Table className='flex-grow flex-shrink-0 p-0 sm:p-5 print:p-0'>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox
                    value='secondary'
                    color='primary'
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
                </TableCell>
                <TableCell>Id</TableCell>
                <TableCell>Username</TableCell>
                <TableCell align='right'>Email</TableCell>
                <TableCell align='right'>Gender</TableCell>
                <TableCell align='right'>First Name</TableCell>
                <TableCell align='right'>Last Name</TableCell>
                <TableCell align='right'>Street</TableCell>
                <TableCell align='right'>State</TableCell>
                <TableCell align='right'>Age</TableCell>
                <TableCell align='right'>Phone</TableCell>
              </TableRow>
            </TableHead>

            <TableBody className='flex-grow flex-shrink-0 p-0 sm:p-5 print:p-0'>
              {users.map(row => (
                <TableRow key={row.id.value}>
                  <TableCell>
                    <Checkbox
                      value='secondary'
                      color='primary'
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                  </TableCell>

                  <TableCell component='th' scope='row'>
                    {row.id.value}
                  </TableCell>
                  <TableCell align='left'>{row.login.username}</TableCell>
                  <TableCell align='left'>{row.email}</TableCell>
                  <TableCell align='left'>{row.gender}</TableCell>
                  <TableCell align='left'>{row.name.first}</TableCell>
                  <TableCell align='left'>{row.name.last}</TableCell>
                  <TableCell align='left'>{row.location.street.name}</TableCell>
                  <TableCell align='left'>{row.location.state}</TableCell>
                  <TableCell align='left'>{row.dob.age}</TableCell>
                  <TableCell align='left'>{row.phone}</TableCell>
                  <TableCell align='left' onClick={() => this.editUser(row.id)}>
                    <CreateIcon />
                  </TableCell>
                  <TableCell
                    align='right'
                    onClick={() => this.deleteUser(row.id)}
                  >
                    <DeleteIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </Animate>
    </div>
  );
};

const style = {
  display: 'flex',
  justifyContent: 'center'
};

export default ListUserComponent;
