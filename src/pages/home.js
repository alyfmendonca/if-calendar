import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import  Calendar  from '../components/calendar/calendar';
import Menu from '../components/menu/menu';
import TopBar from '../components/topBar/topBar';
import DayMeetings from '../components/dayMeetings/dayMeetings';
import Eventos from '../components/eventos/eventos';
import axios from 'axios';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import AddEvent from '../components/addEvent/addEvent';


import './pages.css';



class Home extends React.Component {

  initialState = {
    _id : '',
    nome: '', 
    local: '', 
    descricao: '', 
    link: '', 
    cor: '',
    duracao: '',
  }


  componentWillMount(){
    this._getLista()
  }

  _getLista = async () => {
    axios.get('http://localhost:3000/eventType?userId=andrew').then(response => {

        this.setState({...this.state, eventTypes : response.data})
        console.log(response.data)
        console.log(this.state)
    }).catch(error => {
        console.log(error)
        // this.setState({refreshing: false})
    })
  }

  constructor(props) {
    super(props)
    this.state = this.initialState;
    // super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div id="main" className="homeContainer">
          <Menu></Menu>
          <div className="homeRightContent">
            <TopBar></TopBar>
            <div className="homeBottomContent">
              <div className="homeBottomLeft">
                <div className="homeEventosHeader">
                  <h3>Tipos de eventos</h3>
                  <button className="homeAddEventType" onClick={this.openModal}>Novo tipo de evento</button>
                </div>
                <Eventos eventTypes={this.state.eventTypes}></Eventos>
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  contentLabel="Example Modal"
                >
        
                  <h2 className="addEventTitle">Adicionar um novo evento</h2>
                  <i onClick={this.closeModal} className="fas fa-times fecharModal"></i>
                  
                  <AddEvent></AddEvent>
                </Modal>
                <Calendar></Calendar>
              </div>
              <div className="homeBottomRight">
                <DayMeetings></DayMeetings>
              </div>
              
            </div>
            
          </div>
      </div>
    );
  }
}

// ReactDOM.render(<Home />, document.getElementById('main'))

export default withRouter(Home);
