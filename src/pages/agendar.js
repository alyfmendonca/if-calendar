import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { applyMutationToEventStore } from "@fullcalendar/core";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

import {
    nomeInput,
    emailInput,
    cpfInput,
    dataInput,
    horaInput,
    adicionarInscricao
} from '../actions/inscricao';

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
    state = {
        startDate: new Date()
      };
     
      handleChange = date => {
        this.setState({
          startDate: date
        });
        console.log(date);
      };
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
        axios.get(`http://localhost:3000/eventType?userId=${params.user}&link=${params.evento}`).then(response => {
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
    agendarEvento(){
        
    }
    isWeekday = date => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };
  render() {
    // let {id} = useParams();
    const {nome, email, cpf, data, hora, nomeInput, emailInput, cpfInput, dataInput, horaInput} = this.props;
    const props =this.props;
    const evento = this.state.event;
    
    return (
      <div className="agendarMainBox">
        <div className="agendaMainContent">
            <div className="agendaLeft">
                <h4>{evento.nome}</h4>
                <p>{evento.duracao}</p>
                <p>{evento.local}</p>
                <p>{evento.descricao}</p>

            </div>
            <div className="agendaRight">
                <h4>Preencha os dados e escolha a data e horário desejado</h4>
                <form>
                    <label>Nome</label>
                    <input value={nome} onChange={nomeInput}  />

                    <label>Email</label>
                    <input type="email" value={email} onChange={emailInput}  />

                    <label>CPF</label>
                    <input type="cpf" value={cpf} onChange={cpfInput} />

                    <label>Data</label>
                    {/* <input type="date" value={data} onChange={dataInput} /> */}
                    <DatePicker
                        excludeDates={[new Date('04/25/2019')]}
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        minDate={new Date()}
                        filterDate={this.isWeekday}
                        showTimeSelect
                        minTime={new Date().setHours(8)}
                        maxTime={new Date().setHours(19)}
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="d/MM/yyyy h:mm aa"
                    />
                    
                    <button onClick={this.agendarEvento} className="blueButton">Agendar</button>
                </form>
            </div>
        </div>
      </div>
    );
  }
}

export default Agendar;