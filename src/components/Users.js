// = Libs =
import {Component} from 'react';

// = Components =
import User from './User';

// = Styles =
import classes from './Users.module.css';

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

  componentDidUpdate() {
    if(this.props.users.length === 0){
      throw new Error('no users found')
    }
  }

  render() {
  const usersList = (
   <ul>
     {this.props.users.map((user) =>{
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
