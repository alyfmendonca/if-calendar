import React from 'react'
import userPhoto from "../../assets/user.png";
import "./topBar.css"


export default class TopBar extends React.Component {

  render() {
    return (
      <div className="topBarContainer">
        <div className="topBarLeft">
            <span className="fas fa-search fontAwesomeIcon" ></span>
            <input type="text" className="form-control" id="descricao" value="Pesquisar" />
        </div>
        <div className="topBarRight">
            <span class="fas fa-bell fontAwesomeIcon"></span>
            <div className="userInfo">
                <img src={userPhoto} alt="foto de perfil do usuário"></img>
                <p className="userName">Alyf Mendonça</p>   
                <span class="fas fa-chevron-down fontAwesomeIcon"></span>  
            </div>
        </div>
          
      </div>
    )
  }

}