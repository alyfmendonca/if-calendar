import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";

import './calendar.css' 

export default class Calendar extends React.Component {
  handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }

  render() {
    return (
      <FullCalendar 
      defaultView="dayGridWeek"
      plugins={[ dayGridPlugin, interactionPlugin ]}
      weekends={false}
      weekNumbers={true}
      weekNumbersWithinDays={true}
      header={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay',
      }}
      
      dateClick={this.handleDateClick}
      events={[
        { title: 'event 1', date: '2019-04-01' },
        { title: 'event 2', date: '2019-04-02' }
      ]} />
    )
  }

}