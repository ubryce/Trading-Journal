import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './css/login.css';

class Signup extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('/api/signup-form', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
    <div className="container">
      <div className="user signupBox">
        <div className="formBox">
          <form onSubmit={this.handleSubmit}>
            <h2>Create an account</h2>
            <input type="text" name="" placeholder="Username"></input>
            <input type="email" name="" placeholder="Email Address"></input>
            <input type="password" name="" placeholder="Create Password"></input>
            <input type="password" name="" placeholder="Confirm Password"></input>
            <input type="submit" name="" value="Sign Up"></input>
            <p className="signup">Already have an account? <a href="/login">Sign in.</a></p>
          </form>
        </div>
        <div className="imgBox">
          <img src=""></img>
        </div>
      </div>
    </div>
    );
  }
}
export default Signup;