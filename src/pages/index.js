import React, { Component } from "react";
import { Link } from "react-router-dom";
import leftImage from '../assets/schedule.jpg'

class Index extends Component {
  render() {
    return (
      <div className="indexContainer">
        <div className="indexHeader">
          <div className="indexLogo">
            Agenda
          </div>
          <div className="indexMenu">
            <Link to="/login">Como Funciona</Link>
            <Link to="/login">Preço</Link>
            <Link to="/login">Cadastro</Link>
            <Link to="/login">Login</Link>

          </div>
        </div>
        <div className="indexFirstContent">
          <div className="leftContent">
            <img src={leftImage} />
          </div>
          <div className="dirContent">
            <div className="conteudo">
              <h3>Agende eventos, reuniões e serviços de uma maneira simples e fácil</h3>
              <p><span>Personalize</span> seus eventos e garanta que as pessoas se inscreveram <span>com facilidade</span></p>
              <button className="clean-button">Comece agora</button>
            </div>
          </div>
        </div>
        <div className="indexSecondContent">
          <h3>Como Funciona?</h3>
          <div className="indexComoFuncionaStep">
            <div>
              <p className="indexStepNumber">1</p>
              <p className="indexStepText">Cadastre tipo e</p> <p>duração do evento</p> <p>ou reunião</p>
            </div>
            <div>
              <p className="indexStepNumber">2</p>
              <p className="indexStepText">Compartilhe o </p> <p>evento através de</p> <p>um link</p>
            </div>
            <div>
              <p className="indexStepNumber">3</p>
              <p className="indexStepText">Acompanhe as </p> <p>incrições</p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Index;