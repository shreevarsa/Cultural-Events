import React from 'react'

function EventItem({ image, name}) {
  return (
    <div className="eventItem">
        <div style={{ backgroundImage: `url(${image})`}}></div>
        <div className='card-one'>
        <h1> {name} </h1>
        <p>  Register Now</p>
        </div>
    </div>
  )
}

export default EventItem;