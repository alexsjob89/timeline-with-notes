import React from 'react'

function TimelineEvent({event}) {
  return (
    <div className='timeline-event'>
    <p>{event.description}</p>
    <p><small>{event.timestamp}</small></p>
    </div>
  )
}

export default TimelineEvent