import React from 'react'
import "./eventos.css"
import axios from 'axios'

export default class Eventos extends React.Component {

  componentWillMount(){
    this._getLista()
  }
  constructor(props){
      super(props)
      this.state = this.initialState;
  }

  _getLista = async () => {
    axios.get('http://localhost:3000/eventType?userId=1').then(response => {
        // this.setState({data: response.data, refreshing: false})
        console.log(response.data)
        console.log(this.props)
        
    }).catch(error => {
        console.log(error)
        // this.setState({refreshing: false})
    })
  }

  exibeEventos(){
    if(this.props && this.props.eventTypes && this.props.eventTypes.length > 0){
      const {eventTypes} = this.props;
      return eventTypes.map(event => (
        <div className="singleTypeEvents">
            <div className="top">
              <h4>{event.nome}</h4>
              <p>{event.duracao}</p>
            </div>
            <div className="bottom">
              <input className="linkEvent" id={event.link} value={"http://localhost:3001/" + event.userId + "/" + event.link} />
              <p>/{event.link}</p>
              <a onClick={() => this.copiaLink(event.link)}>Copiar Link</a>
            </div>
          </div>
      ))
    }
  }
  copiaLink(nome){
    var copyTextarea = document.querySelector(`#${nome}`);
    copyTextarea.select();
    document.execCommand('copy');
  }

  render() {
    return (
      <div className="events">
          <div className="listTypeEvents">
            {/* <div className="singleTypeEvents" style={{marginLeft: '0'}}>
              <div className="top">
                <h4>Revisão de Sprint</h4>
                <p>10min</p>
              </div>
              <div className="bottom">
                <p>/tour</p>
                <a href="#">Copiar Link</a>
              </div>
            </div> */}
            {this.exibeEventos()}


          </div>
      </div>
    )
  }

}
