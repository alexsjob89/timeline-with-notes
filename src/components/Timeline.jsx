import React from 'react'
import TimelineEvent from './TimelineEvent'


function Timeline({events}) {
  return (
    <div className='timeline'>
    {events.map((event) => (
     <TimelineEvent key={event.id} event={event}/>
    ))}

    </div>
  )
}

export default Timeline