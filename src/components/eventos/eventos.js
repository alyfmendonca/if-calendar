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
              <p>/{event.link}</p>
              <a href="#">Copiar Link</a>
            </div>
          </div>
      ))
    }
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