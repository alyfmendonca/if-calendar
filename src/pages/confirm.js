import React, { Component } from "react";
import { Link } from "react-router-dom";

class Confirm extends Component {
  render() {
    return (
        <div className="agendarMainBox">    
            <div className="agendaMainContent">
                <div className="boxConfirm">
                    <i class="fa fa-calendar-check-o"></i>
                    <h4>Evento agendado com sucesso!!</h4>
                    <p>Acompanhe o evento em sua agenda receba novas informações por e-mail</p>
                </div>
            </div>       
        </div>
    );
  }
}

export default Confirm;