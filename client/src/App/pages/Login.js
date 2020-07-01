import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './css/login.css';

class Login extends Component {
  render() {
    return (
    <div className={styles.card}>
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
            <p className="signup">Don't have an account?<a href="#">Sign up.</a></p>
          </form>
        </div>
      </div>

      <div className="user signupBox">
        <div className="formBox">
          <form>
            <h2>Create an account</h2>
            <input type="text" name="" placeholder="Username"></input>
            <input type="email" name="" placeholder="Email Address"></input>
            <input type="password" name="" placeholder="Create Password"></input>
            <input type="password" name="" placeholder="Confirm Password"></input>
            <input type="submit" name="" value="Sign Up"></input>
            <p className="signup">Already have an account?<a href="#">Sign in.</a></p>
          </form>
        </div>
        <div className="imgBox">
          <img src=""></img>
        </div>
      </div>
      
    </div>
    </div>
    );
  }
}
export default Login;