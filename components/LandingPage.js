import React from 'react';
import Navbar from '../components/Navbar'; 
import Logo from './Logo';
function LandingPage(){
  return (
    <div>

      <section className="section1">
        <Logo/>
        <Navbar />
        <div className='content'>        
        </div>
      </section>
    </div>
  );
};

export default LandingPage;