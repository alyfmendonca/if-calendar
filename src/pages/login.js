import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  callLogin(){
    document.getElementsByClassName('cadastroTextBlue')[0].setAttribute("style", "display:none;");
    document.getElementsByClassName('cadastroForm')[0].setAttribute("style", "display:none;");
    document.getElementsByClassName('loginTextBlue')[0].setAttribute("style", "display:flex;");
    document.getElementsByClassName('loginForm')[0].setAttribute("style", "display:flex;");
    document.getElementsByClassName('loginMainContent')[0].setAttribute("style", "flex-direction:row;");
  }
  callCadastro(){
    document.getElementsByClassName('loginTextBlue')[0].setAttribute("style", "display:none;");
    document.getElementsByClassName('loginForm')[0].setAttribute("style", "display:none;");
    document.getElementsByClassName('cadastroTextBlue')[0].setAttribute("style", "display:flex;");
    document.getElementsByClassName('cadastroForm')[0].setAttribute("style", "display:flex;");
    document.getElementsByClassName('loginMainContent')[0].setAttribute("style", "flex-direction:row-reverse;");

  }

  render() {
    return (
      <div className="loginMainContainer">
        <div className="loginMainContent">
          <div className="blueContent">
            <div className="loginTextBlue">
              <h4>É ótimo ter você aqui novamente</h4>
              <p>Faça login para aproveitar os benefícios da plataforma</p>
              <button onClick={this.callCadastro}>Cadastrar</button>
            </div>
            <div className="cadastroTextBlue">
              <h4>Seja bem vindo a plataforma</h4>
              <p>Crie seu perfil e aproveite os benefícios da plataforma</p>
              <button onClick={this.callLogin}>Login</button>
            </div>
          </div>
          <div className="formContent">
            <div className="loginForm">
              <div className="googleLoginCadastro">Logar com Google</div>

              <label>Login</label>
              <input value="" />

              <label>Senha</label>
              <input value="" />
              
              <button>Logar</button>
            </div>
            <div className="cadastroForm">
              <div className="googleLoginCadastro">Cadastrar com Google</div>
              <label>Login</label>
              <input value="" />

              <label>Senha</label>
              <input value="" />

              <label>Confirmar Senha</label>
              <input value="" />
              <button>Cadastrar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Login;