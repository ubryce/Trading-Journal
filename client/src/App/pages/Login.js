import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/login.css';

class Login extends Component {
  render() {
    return (
    <div className="container">
      <div className="user signinBox">
        <div className="imgBox">
          <img src=""></img>
        </div>
        <div className="formBox">
          <form>
            <h2>Sign In</h2>
            <input type="text" name="" placeholder="Username"></input>
            <input type="password" name="" placeholder="Password"></input>
            <input type="submit" name="" value="Login"></input>
          </form>
        </div>
      </div>
    </div>
    );
  }
}
export default Login;