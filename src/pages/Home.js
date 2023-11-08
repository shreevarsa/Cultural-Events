import React from 'react';

import BannerImage from '../assets/backgroun1.jpg';
import '../styles/Home.css';
function Home() {
  return (
    <div className='Home'>
      <div className="headerContainer" style={{ backgroundImage : `url(${BannerImage})` }} >
        
        
        <h1> Welcome to cultural fest </h1>
        <p> We live in a society where Culture Defines us. </p>
        <button> Register Now!!! </button>
      </div>
    </div>
  );
}

export default Home;