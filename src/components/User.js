// = libs =
import {Component} from 'react'

// = Styles =
import classes from './User.module.css';


class User  extends Component{
  constructor() {
    super();

  }
  componentWillUnmount() {
    console.log('unmount');
  }

  render() {
    return (
      <div>
      <li className={classes.user}>{this.props.name}</li>
      </div>
    )
  }
}
export default User;
