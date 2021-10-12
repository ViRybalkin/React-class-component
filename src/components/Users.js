// = Libs =
import {Component} from 'react';

// = Components =
import User from './User';

// = Styles =
import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class Users extends  Component {
  constructor(){
    super();
    this.state = {
      showUsers:false,
    }
  }

  toggleUsersHandler(){
    this.setState(curState => {
      return {
        showUsers:!curState.showUsers
      }
    })
  }
  render() {
  const usersList = (
   <ul>
     {DUMMY_USERS.map((user) =>{
      return <User key={user.id} name={user.name}/>
     })}
   </ul>
  )
    return (
    <div className={classes.users}>
      <button onClick={this.toggleUsersHandler.bind(this)}>
        {this.state.showUsers ? 'Hide' : 'Show'} Users
      </button>
      {this.state.showUsers && usersList}
    </div>
  );
  }
}

export default Users;
