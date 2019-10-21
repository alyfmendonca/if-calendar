import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUp extends Component {
  render() {
    return (
      <div>
          Cadastrar
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div>
            <Link to="/">Cadastrar</Link>
          </div>
          
      </div>
    );
  }
}

export default SignUp;