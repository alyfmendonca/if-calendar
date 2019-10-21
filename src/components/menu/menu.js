import React from 'react'

import './menu.css' 
import img from '../../assets/logo1.png'

export default class Menu extends React.Component {

  render() {
    return (
      <div className="menuContainer">
          <img src={img} alt="logo da empresa" className="menuLogo"></img>
      </div>
    )
  }

}