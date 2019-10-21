import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { applyMutationToEventStore } from "@fullcalendar/core";


class Agendar extends Component {
    
    initialState = {
        _id : '',
        nome: '', 
        local: '', 
        descricao: '', 
        link: '', 
        cor: '',
        duracao: '',
        event: ''
    }
    constructor(props){
        super(props);
        this.state = this.initialState;
        const { match: { params } } = this.props;
        console.log(params.user);
        console.log(params.evento)
    }
    componentWillMount(){
        this._getEvento()
    }
    
    _getEvento = async () => {
        const { match: { params } } = this.props;
        axios.get(`http://localhost:3000/eventType?userId=${params.user}&nome=${params.evento}`).then(response => {
            console.log(response)
            if(response.data == ''){
                window.location.href = `/${params.user}`;
            }else{
                this.setState({...this.state, event : response.data[0]});
            }
            console.log(this.state)
        }).catch(error => {
            console.log(error)
            // this.setState({refreshing: false})
        })
    }

    exibeEsquerda() {
    const {evento} = this.state.event;
    return evento.map(event => (
        <div className="singleTypeEvents">
            <div className="top">
            <h4>{event.nome}</h4>
            <p>{event.duracao}</p>
            </div>
            <div className="bottom">
            <p>/{event.link}</p>
            <a href="#">Copiar Link</a>
            </div>
        </div>
    ))
    }
  render() {
    // let {id} = useParams();
    const evento = this.state.event;
    return (
      <div className="agendarMainBox">
        <div className="agendaMainContent">
            <div className="agendaLeft">
                {evento.nome}
            </div>
            <div className="agendaRight">

            </div>
        </div>
      </div>
    );
  }
}

export default Agendar;