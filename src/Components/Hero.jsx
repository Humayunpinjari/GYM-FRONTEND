import React from 'react';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='content'>
        <div className='title'>  
        {/* Invest Smarter, Live Better. */}
          <h2>Invest Smarter</h2>
          <h2>Live Better</h2>
        </div>
        <div className="sub-title">
          <p>Let's make fitness happen!</p>
      </div>
      <div className="buttons hero-btn">
        <button>Start Your Journey</button>
        <button>Discover Your Plan</button>
      </div>
      </div>

    </section>
  );
};

export default Hero;