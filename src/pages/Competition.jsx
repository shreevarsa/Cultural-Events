import React from 'react';
import { EventList } from "../helpers/EventList.js";
import EventItem from "../components/EventItem.js";
import bharatam from "../assets/bharatanatyam.jpg";
import solo from "../assets/solodance.jpg";
import group from "../assets/groupdance.jpg";
import sing from "../assets/singing.jpg";
import drum from "../assets/drums.jpg";
import shortfilm from "../assets/mime.jpg";
import "../styles/Event.css";


function Competition() {
  return (
    <div className="competition">
      <h1 className="eventTitle">Events</h1>
      <div className='eventlist'>
        {EventList.map((eventItem, key)=> {
          return (<EventItem key={key} image={eventItem.image} name={eventItem.name} register={eventItem.register} />
          );
        })}
      </div> 
    </div>

  )
}

export default Competition;